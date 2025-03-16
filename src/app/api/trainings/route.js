import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      isActive,
      content,
      imageUrl,
      description,
      categoryId,
      title,
      slug,
    } = await request.json();

    const existingSlug = await db.training.findUnique({
      where: { slug },
    });

    if (existingSlug) {
      return NextResponse.json(
        { message: "Slug already exists" },
        { status: 400 }
      );
    }
   
    const newTrainings = await db.training.create({
      data: {
        isActive,
        content,
        imageUrl,
        description,
        categoryId,
        title,
        slug,
      },
    });
    console.log("", newTrainings);
    return NextResponse.json(newTrainings);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Failed to create Training",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const trainings = await db.training.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(trainings);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to get trainings",
        error,
      },
      { status: 500 }
    );
  }
}