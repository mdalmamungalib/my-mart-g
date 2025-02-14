import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { isActive, imageUrl, description, title, slug } = await request.json();

    // Check if category already exists
    const existingCategory = await db.category.findUnique({
      where: { slug },
    });

    if (existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "The Category already exists",
        },
        { status: 409 }
      );
    }

    // Create new category
    const newCategory = await db.category.create({
      data: { isActive, imageUrl, description, title, slug },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      {
        message: "Failed to create Category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Fetch categories including related products & trainings
    const categories = await db.category.findMany({
      include: {
        trainings: true,
        products: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      {
        message: "Failed to get Categories",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
