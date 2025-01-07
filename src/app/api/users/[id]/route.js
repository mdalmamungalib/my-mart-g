import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
      const user = await db.user.findUnique({
        where: {
          id,
        },
      });
      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Failed to create Coupon",
          error,
        },
        { status: 500 }
      );
    }
  }
  