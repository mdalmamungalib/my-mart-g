import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      isActive,
      name,
      password,
      email,
      phone,
      physicalAddress,
      nin,
      dob,
      description,
      code,
    } = await request.json();

    const parsedDob = new Date(dob).toISOString(); 

    const existingStaff = await db.staff.findUnique({
      where: {
        code,
      },
    });

    if (existingStaff) {
      return NextResponse.json(
        {
          data: null,
          message: "The Staff already exists",
        },
        { status: 409 }
      );
    }

    const newStaff = await db.staff.create({
      data: {
        isActive,
        name,
        password,
        email,
        phone,
        physicalAddress,
        nin,
        dob: parsedDob,  
        description,
        code,
      },
    });

    return NextResponse.json(newStaff, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating staff:", error);
    return NextResponse.json(
      { message: "Failed to create staff", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const staffMembers = await db.staff.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(staffMembers);
  } catch (error) {
    console.error("❌ Error fetching staff:", error);
    return NextResponse.json(
      { message: "Failed to fetch staff", error: error.message },
      { status: 500 }
    );
  }
}
