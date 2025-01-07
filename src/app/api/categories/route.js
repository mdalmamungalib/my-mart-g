import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { isActive, imageUrl, description, title, slug } =
      await request.json();

      const existingCategory = await db.category.findUnique({
        where:{
          slug
        }
      })
      if(existingCategory) {
        return NextResponse.json(
          {
            message: "The Category already exists",
          },
          { status: 409 }
        );
      }
    const newCategory = await db.category.create({
      data: { isActive, imageUrl, description, title, slug },
    });
    console.log(newCategory);
    return NextResponse.json(newCategory);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Category",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Category",
        error,
      },
      { status: 500 }
    );
  }
}
