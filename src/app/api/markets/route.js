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

    const existingMarket = await db.market.findUnique({
      where:{
        slug
      }
    })
    if(existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "The Market already exists",
        },
        { status: 409 }
      );
    }

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


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const markets = await db.market.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(markets);
  } catch (error) {
    console.error("Error fetching markets:", error.message);
    return NextResponse.json(
      { message: "Failed to get markets. Please try again later." },
      { status: 500 }
    );
  }
}