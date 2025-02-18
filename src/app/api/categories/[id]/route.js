import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
      include: {
        trainings: true,
        products: true,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      {
        message: "Failed to get Category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
