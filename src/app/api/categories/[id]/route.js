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
      return NextResponse.json({data: null, message: 'Category not found'}, {status: 404});
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
