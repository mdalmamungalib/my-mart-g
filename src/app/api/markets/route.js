import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      isActive,
      categoryIds,
      description,
      logoUrl,
      title,
      slug,
    } = await request.json();
    const newMarket = await db.market.create({
      data: {
        isActive,
        categoryIds,
        description,
        logoUrl,
        title,
        slug,
      },
    });
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Failed to create Market",
        error,
      },
      { status: 500 }
    );
  }
}
