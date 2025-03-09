import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      sellerId,
      isActive = true,
      description = "",
      tags = [],
      imageUrl = "",
      categoryId,
      salePrice,
      productPrice,
      barcode,
      sku,
      title,
      slug,
      productCode,
      minimumWholeQty = 0,
      wholesalePrice = 0,
      isMultiple = false,
      isWholesale = false,
      productStock,
      qty,
    } = await request.json();

    // Validate required fields
    if (!sellerId || !title || !slug || !categoryId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate numeric fields
    const salePriceParsed = parseFloat(salePrice);
    const productPriceParsed = parseFloat(productPrice);
    const productStockParsed = parseInt(productStock);
    const qtyParsed = parseInt(qty);

    if (
      isNaN(salePriceParsed) ||
      isNaN(productPriceParsed) ||
      isNaN(productStockParsed) ||
      isNaN(qtyParsed)
    ) {
      return NextResponse.json(
        { message: "Invalid numeric values" },
        { status: 400 }
      );
    }

    // Check for existing product
    const existingProduct = await db.product.findUnique({
      where: { slug },
    });
    if (existingProduct) {
      return NextResponse.json(
        { message: "The Product already exists" },
        { status: 409 }
      );
    }

    // Create new product
    const newProduct = await db.product.create({
      data: {
        isActive,
        isMultiple,
        isWholesale,
        description,
        sellerId,
        tags,
        imageUrl,
        categoryId,
        salePrice: salePriceParsed,
        productPrice: productPriceParsed,
        barcode,
        sku,
        title,
        slug,
        productCode,
        minimumWholeQty: parseInt(minimumWholeQty) || 0,
        wholesalePrice: parseFloat(wholesalePrice) || 0,
        productStock: productStockParsed,
        qty: qtyParsed,
      },
    });

    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error.message);
    return NextResponse.json(
      { message: "Failed to create Product. Please try again later." },
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
        message: "Failed to get products",
        error,
      },
      { status: 500 }
    );
  }
}
