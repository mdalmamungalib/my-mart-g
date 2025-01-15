import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  // userID:sellerId
  // isActive,
  //     description,
  //     tags,
  //     imageUrl,
  //     sellersIds,
  //     categoryIds,
  //     salePrice,
  //     productPrice,
  //     barcode,
  //     sku,
  //     title,
  //     slug,
  //     productCode,
  //     minimumWholeQty,
  //     wholesalePrice,
  //     isMultiple,
  //     isWholesale,
  //     productStock,
  //     qty,
  try {
    const {
      sellerId,
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
      productCode,
      minimumWholeQty,
      wholesalePrice,
      isMultiple,
      isWholesale,
      productStock,
      qty,
    } = await request.json();

    const existingProduct = await db.product.findUnique({
      where: {
        slug
      },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "The Product already exists",
        },
        { status: 409 }
      );
    }

    const newProduct = await db.product.create({
      data: {
        isActive,
        isMultiple,
        isWholesale,
        description,
        sellerId,
        tags,
        imageUrl,
        sellersIds,
        categoryIds,
        salePrice: parseFloat(salePrice),
        productPrice: parseFloat(productPrice),
        barcode,
        sku,
        title,
        slug,
        productCode,
        minimumWholeQty: parseInt(minimumWholeQty),
        wholesalePrice: parseFloat(wholesalePrice),

        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });

    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Failed to create Product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to get Product",
        error,
      },
      { status: 500 }
    );
  }
}
