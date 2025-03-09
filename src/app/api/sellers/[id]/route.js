
import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const seller = await db.sellerProfile.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(seller);
  } catch (error) {
    console.error("Error fetching seller:", error);
    return NextResponse.json(
      {
        message: "Failed to get seller",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingSeller = await db.sellerProfile.findUnique({
      where: {
        id,
      },
    });
    if (!existingSeller) {
      return NextResponse.json({data: null, message: 'Seller not found'}, {status: 404});
    }
    const deletedSeller = await db.sellerProfile.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedSeller);
  } catch (error) {
    console.error("Error fetching seller:", error);
    return NextResponse.json(
      {
        message: "Failed to delete seller",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

