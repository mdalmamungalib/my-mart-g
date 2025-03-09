
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
      return NextResponse.json({data: null, message: 'Coupon not found'}, {status: 404});
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

