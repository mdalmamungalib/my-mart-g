import nodemailer from "nodemailer";
import { render } from "@react-email/render"; // ✅ Import render function
import EmailTemplate from "components/email-template/EmailTemplate";

export default async function sendEmail(
  email,
  name,
  token,
  userId
) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ✅ Await the render function to get the HTML string
    const emailHtml = await render(
      EmailTemplate({
        name,
        linkText: "Verify Account",
        redirectUrl: `/onboarding/${userId}?token=${token}`,
      })
    );

    const mailOptions = {
      from: `"My Mart" <${process.env.GMAIL_EMAIL}>`,
      to: email,
      subject: "Account Verification - My Mart Ecommerce",
      html: emailHtml, // ✅ Now passing the awaited HTML string
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return {
      success: false,
      message: "Failed to send email",
      error,
    };
  }
}
