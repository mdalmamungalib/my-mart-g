import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const newStaff = await request.json();
    console.log(newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create StaffData",
      error,
    }, {status: 500});
  }
}
