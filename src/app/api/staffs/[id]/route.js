import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const Staff = await db.staff.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(Staff);
  } catch (error) {
    console.error("Error fetching Staff:", error);
    return NextResponse.json(
      {
        message: "Failed to get Staff",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingStaff = await db.staff.findUnique({
      where: {
        id,
      },
    });
    if (!existingStaff) {
      return NextResponse.json(
        { data: null, message: "Staff not found" },
        { status: 404 }
      );
    }
    const deletedStaff = await db.staff.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedStaff);
  } catch (error) {
    console.error("Error fetching Staff:", error);
    return NextResponse.json(
      {
        message: "Failed to delete Staff",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


export async function PUT(request, {params: {id}}) {
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
        id,
      },
    });

    if (!existingStaff) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    const updateStaff = await db.staff.update({
      where: {
        id,
      },
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
    console.log(updateStaff)

    return NextResponse.json(updateStaff, { status: 200 });
  } catch (error) {
    console.error("❌ Error Update staff:", error);
    return NextResponse.json(
      { message: "Failed to Update staff", error: error.message },
      { status: 500 }
    );
  }
}
