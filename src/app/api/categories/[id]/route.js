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

export async function DELETE(request, { params: { id } }) {
  try {
    const existingCategory = await db.category.findUnique({
      where: {
        id,
      },
    });
    if (!existingCategory) {
      return NextResponse.json(
        { data: null, message: "Category not found" },
        { status: 404 }
      );
    }
    const deletedCategory = await db.category.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCategory);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      {
        message: "Failed to delete Category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { id, isActive, imageUrl, description, title, slug } =
      await request.json();

    // Check if category already exists
    const existingCategory = await db.category.findUnique({
      where: { id },
    });

    if (!existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    // Create new category
    const updateCategory = await db.category.update({
      where: { id },
      data: { isActive, imageUrl, description, title, slug },
    });

    return NextResponse.json(updateCategory, { status: 201 });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      {
        message: "Failed to update Category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
