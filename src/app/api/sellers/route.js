import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      code,
      isActive,
      notes,
      terms,
      date,
      contactPersonPhone,
      contactPerson,
      sellersPhysical,
      profileImageUrl,
      email,
      phone,
      name,
    } = await request.json();
    const newSellers = await db.seller.create({
      data: {
        code,
        isActive,
        notes,
        terms,
        date,
        contactPersonPhone,
        contactPerson,
        sellersPhysical,
        profileImageUrl,
        email,
        phone,
        name,
      },
    });
    console.log(newSellers);
    return NextResponse.json(newSellers);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Seller",
        error,
      },
      { status: 500 }
    );
  }
}
