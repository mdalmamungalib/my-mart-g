import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const market = await db.market.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(market);
  } catch (error) {
    console.error("Error fetching market:", error);
    return NextResponse.json(
      {
        message: "Failed to get market",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingMarket = await db.market.findUnique({
      where: {
        id,
      },
    });
    if (!existingMarket) {
      return NextResponse.json(
        { data: null, message: "market not found" },
        { status: 404 }
      );
    }
    const deletedMarket = await db.market.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedMarket);
  } catch (error) {
    console.error("Error fetching market:", error);
    return NextResponse.json(
      {
        message: "Failed to delete market",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
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
      where: {
        id,
      },
    });
    if (!existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "The Market already exists",
        },
        { status: 409 }
      );
    }

    const updateMarket = await db.market.update({
      where: {
        id,
      },
      data: {
        isActive,
        categoryIds,
        description,
        logoUrl,
        title,
        slug,
      },
    });
    console.log(updateMarket);
    return NextResponse.json(updateMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Market",
        error,
      },
      { status: 500 }
    );
  }
}
