import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function POST(request: Request) {
  try {
    // -------------------------
    // Read FormData
    // -------------------------

    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const address = formData.get("address")?.toString().trim() || "";

    const photos = formData.getAll("photos") as File[];

    // -------------------------
    // Validation
    // -------------------------

    if (!name || !email || !phone || !address) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (photos.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please upload at least one property photo.",
        },
        {
          status: 400,
        }
      );
    }

    if (photos.length > 10) {
      return NextResponse.json(
        {
          success: false,
          message: "You can upload a maximum of 10 photos.",
        },
        {
          status: 400,
        }
      );
    }

    // Optional: limit file size to 10 MB each
    const MAX_SIZE = 10 * 1024 * 1024;

    for (const photo of photos) {
      if (photo.size > MAX_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: `${photo.name} is larger than 10 MB.`,
          },
          {
            status: 400,
          }
        );
      }

      if (!photo.type.startsWith("image/")) {
        return NextResponse.json(
          {
            success: false,
            message: `${photo.name} is not a valid image.`,
          },
          {
            status: 400,
          }
        );
      }
    }

    // -------------------------
    // Generate PDF
    // -------------------------

    const pdfDoc = await PDFDocument.create();

    const page = pdfDoc.addPage([595, 842]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText("PROPERTY SELLER SUBMISSION", {
      x: 50,
      y: 790,
      size: 24,
      font,
      color: rgb(0.05, 0.16, 0.29),
    });

    page.drawText(
      `Submitted: ${new Date().toLocaleString()}`,
      {
        x: 50,
        y: 760,
        size: 12,
        font,
      }
    );

    let y = 700;

    const fields = [
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Property Address", address],
      ["Photos Uploaded", photos.length.toString()],
    ];

    fields.forEach(([label, value]) => {
      page.drawText(`${label}: ${value}`, {
        x: 50,
        y,
        size: 14,
        font,
      });

      y -= 35;
    });

    const pdfBytes = await pdfDoc.save();

    // -------------------------
    // Convert Photos
    // -------------------------

    const photoAttachments = await Promise.all(
      photos.map(async (photo) => ({
        filename: photo.name,
        content: Buffer.from(await photo.arrayBuffer()),
        contentType: photo.type,
      }))
    );

    // -------------------------
    // Configure Mail
    // -------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional: verify SMTP connection
    await transporter.verify();

    // -------------------------
    // Send Email
    // -------------------------

    await transporter.sendMail({
      from: `"Website Seller Form" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_TO,

      subject: `🏡 New Seller Submission - ${name}`,

      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>New Property Seller Submission</h2>

          <table cellpadding="8">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Property Address</strong></td>
              <td>${address}</td>
            </tr>

            <tr>
              <td><strong>Photos Uploaded</strong></td>
              <td>${photos.length}</td>
            </tr>
          </table>

          <p>
            The seller information PDF and all uploaded property photos
            are attached to this email.
          </p>
        </div>
      `,

      attachments: [
        {
          filename: "SellerInformation.pdf",
          content: Buffer.from(pdfBytes),
          contentType: "application/pdf",
        },

        ...photoAttachments,
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Seller submission received successfully.",
    });
  } catch (error) {
    console.error("SELL FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}