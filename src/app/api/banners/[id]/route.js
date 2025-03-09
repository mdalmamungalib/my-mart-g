
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
      return NextResponse.json({data: null, message: 'Banner not found'}, {status: 404});
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
        message: "Failed to delete Category",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

