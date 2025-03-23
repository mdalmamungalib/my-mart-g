import db from "../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {v4 as uuid4}from "uuid";
import base64url from "base64url";
import {Resend} from "resend";

export async function POST(request) {
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
    //if user does not exist, create a new one
    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    console.log(newUser);
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
