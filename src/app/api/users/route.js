import db from "../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    //extract use credentials
<<<<<<< HEAD
    const { name, email, password, role } = await request.json();
=======
    const { name, email, password } = await request.json();
>>>>>>> origin/main
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
<<<<<<< HEAD
        role,
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
        message: "Failed to Get User",
=======
        message: "Failed to create User",
>>>>>>> origin/main
        error,
      },
      { status: 500 }
    );
  }
}
