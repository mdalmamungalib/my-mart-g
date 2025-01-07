import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      isActive,
      description,
      logoUrl,
      categoryIds,
      title,
      slug,
    } = await request.json();
    const newMarket = await db.market.create({
      data: {
        isActive,
        description,
        logoUrl,
        categoryIds,
        title,
        slug,
      },
    });
    console.log(newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Market",
        error,
      },
      { status: 500 }
    );
  }
}
