import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      isActive,
      description,
      tags,
      imageUrl,
      sellersIds,
      categoryIds,
      salePrice,
      productPrice,
      barcode,
      sku,
      title,
      slug,
    } = await request.json();
    const newProduct = await db.product.create({
      data: {
        isActive,
        description,
        tags,
        imageUrl,
        sellersIds,
        categoryIds,
        salePrice,
        productPrice,
        barcode,
        sku,
        title,
        slug,
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create Product",
        error,
      },
      { status: 500 }
    );
  }
}
