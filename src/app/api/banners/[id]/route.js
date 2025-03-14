import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const banner = await db.banner.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.error("Error fetching banner:", error);
    return NextResponse.json(
      {
        message: "Failed to get banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingBanner = await db.banner.findUnique({
      where: {
        id,
      },
    });
    if (!existingBanner) {
      return NextResponse.json(
        { data: null, message: "Banner not found" },
        { status: 404 }
      );
    }
    const deletedBanner = await db.banner.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedBanner);
  } catch (error) {
    console.error("Error fetching Banner:", error);
    return NextResponse.json(
      {
        message: "Failed to delete Banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, link, imageUrl, isActive } =
      await request.json();

    // Check if Banner already exists
    const existingBanner = await db.banner.findUnique({
      where: { id },
    });

    if (!existingBanner) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    // Create new Banner
    const updateBanner = await db.Banner.update({
      where: { id },
      data: { title, link, imageUrl, isActive },
    });

    return NextResponse.json(updateBanner, { status: 200 });
  } catch (error) {
    console.error("Error updating Banner:", error);
    return NextResponse.json(
      {
        message: "Failed to update Banner",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
