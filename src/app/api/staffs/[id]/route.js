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
