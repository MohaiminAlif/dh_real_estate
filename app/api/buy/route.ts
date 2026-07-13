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
    const city = formData.get("city")?.toString().trim() || "";
    const propertyType = formData.get("propertyType")?.toString().trim() || "";
    const bedrooms = formData.get("bedrooms")?.toString().trim() || "";
    const washrooms = formData.get("washrooms")?.toString().trim() || "";
    const parking = formData.get("parking")?.toString().trim() || "";

  
    // -------------------------
    // Validation
    // -------------------------

    if (!name || !email || !phone) {
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

    // -------------------------
    // Generate PDF
    // -------------------------

    const pdfDoc = await PDFDocument.create();

    const page = pdfDoc.addPage([595, 842]);

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText("PROPERTY BUYER SUBMISSION", {
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
      ["city", city],
      ["propertyType", propertyType],
      ["bedrooms", bedrooms],
      ["washrooms", washrooms],
      ["parking", parking],

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
      from: `"Website Buyer Form" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_TO,

      subject: `🏡 New Buyer Submission - ${name}`,

      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Property Buyer Submission</h2>

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
              <td><strong>City</strong></td>
              <td>${city}</td>
            </tr>

            <tr>
              <td><strong>Property Type</strong></td>
              <td>${propertyType}</td>
            </tr>
            
            <tr>
              <td><strong>Bedrooms Required</strong></td>
              <td>${bedrooms}</td>
            </tr>
            
            <tr>
              <td><strong>Washroom Required</strong></td>
              <td>${washrooms}</td>
            </tr>

            <tr>
              <td><strong>Parking Required</strong></td>
              <td>${parking}</td>
            </tr>            

          </table>

        </div>
      `,

      attachments: [
        {
          filename: "BuyerInformation.pdf",
          content: Buffer.from(pdfBytes),
          contentType: "application/pdf",
        },


      ],
    });

    return NextResponse.json({
      success: true,
      message: "Buyer submission received successfully.",
    });
  } catch (error) {
    console.error("BUY FORM ERROR:", error);

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