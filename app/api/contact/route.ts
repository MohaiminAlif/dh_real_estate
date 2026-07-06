import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { leadSchema } from "@/lib/validation";


export async function POST(request: Request) {
  try {
   
const body = await request.json();

const validation = leadSchema.safeParse(body);

if (!validation.success) {
  return NextResponse.json(
    {
      success: false,
      message: "Invalid form data.",
      errors: validation.error.flatten(),
    },
    { status: 400 }
  );
}

const data = validation.data;

const {
  name,
  email,
  phone,
  service,
  budget,
  message,
} = data;
    // -------------------------
    // Validation
    // -------------------------

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // -------------------------
    // Create PDF
    // -------------------------

    const pdfDoc = await PDFDocument.create();

    const page = pdfDoc.addPage([595, 842]); // A4

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText("NEW REAL ESTATE LEAD", {
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
      ["Service", service],
      ["Budget", budget],
      ["Message", message],
    ];

    fields.forEach(([label, value]) => {
      page.drawText(`${label}: ${value || "-"}`, {
        x: 50,
        y,
        size: 14,
        font,
      });

      y -= 35;
    });

    const pdfBytes = await pdfDoc.save();

    // -------------------------
    // Email Transport
    // -------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // -------------------------
    // Send Email
    // -------------------------

    await transporter.sendMail({
      from: `"Website Lead" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_TO,

      subject: `🏡 New Website Lead - ${name}`,

      html: `
        <div style="font-family:Arial;padding:30px">

          <h2 style="color:#071A2F">
            New Lead Received
          </h2>

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
              <td><strong>Service</strong></td>
              <td>${service}</td>
            </tr>

            <tr>
              <td><strong>Budget</strong></td>
              <td>${budget}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
            </tr>

          </table>

          <p>
            The completed lead form has also been attached as a PDF.
          </p>

        </div>
      `,

      attachments: [
        {
          filename: `Lead-${name}.pdf`,
          content: Buffer.from(pdfBytes),
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
    
  }
  
}