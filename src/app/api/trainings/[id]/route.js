import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const training = await db.training.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(training);
  } catch (error) {
    console.error("Error fetching training:", error);
    return NextResponse.json(
      {
        message: "Failed to get training",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    console.log("delete id",id)
    // Check if training exists
    const existingTraining = await db.training.findUnique({
      where: {
        id,
      },
    });

    // If no training exists, return 404
    if (!existingTraining) {
      return NextResponse.json(
        { data: null, message: "Training not found" },
        { status: 404 }
      );
    }

    // Delete the training
    const deletedTraining = await db.training.delete({
      where: {
        id,
      },
    });

    // Return the deleted training data with 200 status
    return NextResponse.json(deletedTraining, { status: 200 });
  } catch (error) {
    console.error("Error deleting training:", error);
    return NextResponse.json(
      {
        message: "Failed to delete training",
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
      content,
      imageUrl,
      description,
      categoryId,
      title,
      slug,
    } = await request.json();
    const existingTraining = await db.training.findUnique({
      where: {
        id,
      },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }
    const updateTrainings = await db.training.update({
      where: { id },
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
    console.log("", updateTrainings);
    return NextResponse.json(updateTrainings);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Training",
        error,
      },
      { status: 500 }
    );
  }
}
