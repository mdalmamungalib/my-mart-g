import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const coupon = await db.coupon.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(coupon);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return NextResponse.json(
      {
        message: "Failed to get coupon",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingCoupon = await db.coupon.findUnique({
      where: {
        id,
      },
    });
    if (!existingCoupon) {
      return NextResponse.json(
        { data: null, message: "Coupon not found" },
        { status: 404 }
      );
    }
    const deletedCoupon = await db.coupon.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedCoupon);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    return NextResponse.json(
      {
        message: "Failed to delete coupon",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, couponCode, expiryDate, isActive } =
      await request.json();
    // Check if Coupon already exists
    const existingCoupon = await db.coupon.findUnique({
      where: { id },
    });

    if (!existingCoupon) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    const updateCoupon = await db.coupon.update({
      where: { id },
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
      },
    });
    console.log(updateCoupon);
    return NextResponse.json(updateCoupon);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Update Coupon ",
        error,
      },
      { status: 500 }
    );
  }
}
