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
    return NextResponse.json(
      {
        message: "Failed to create Training",
        error,
      },
      { status: 500 }
    );
  }
}
