import db from "../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend } from "resend";
import EmailTemplate from "components/email-template/EmailTemplate";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    //extract use credentials

    const { name, email, password, role } = await request.json();
    //check if user already exists by email address  (for uniqueness)
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        { status: 409 }
      );
    }
    //hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    //Generate Token
    // Generate a random UUID (version 4)
    const rawToken = uuidv4();
    console.log(rawToken);
    // Encode the token using Base64 URL-safe format
    const token = base64url.encode(rawToken);
    //if user does not exist, create a new one
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        verificationToken: token,
      },
    });
    console.log(newUser);

    // SEND THE EMAIL IF USER ROLE === SELLER
    if (role === "SELLER") {
      //Send an Email with the Token on the link as a search param
      const userId = newUser.id;
      const linkText = "Verify Account";
      const redirectUrl = `onboarding/${userId}?token=${token}`;
      const sendMail = await resend.emails.send({
        from: "Desishub <info@jazzafricaadventures.com>",
        to: email,
        subject: "Account Verification - My Mart Ecommerce",
        react: EmailTemplate({ name, redirectUrl, linkText }),
      });
      console.log(sendMail);
      //Upon Click redirect them to the login

      console.log(token);
    }
    return NextResponse.json(
      {
        data: newUser,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Server error: Something went wrong",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Get User",

        message: "Failed to create User",
        error,
      },
      { status: 500 }
    );
  }
}
