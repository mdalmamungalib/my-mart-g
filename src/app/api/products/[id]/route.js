import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      {
        message: "Failed to get product",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingProduct = await db.product.findUnique({
      where: {
        id,
      },
    });
    if (!existingProduct) {
      return NextResponse.json(
        { data: null, message: "Product not found" },
        { status: 404 }
      );
    }
    const deletedProduct = await db.product.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      {
        message: "Failed to delete product",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


export async function PUT(request, { params: {id} }) {
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

    // Validate numeric fields
    const salePriceParsed = parseFloat(salePrice);
    const productPriceParsed = parseFloat(productPrice);
    const productStockParsed = parseInt(productStock);
    const qtyParsed = parseInt(qty);
    const minimumWholeQtyParsed = isNaN(parseInt(minimumWholeQty)) ? 0 : parseInt(minimumWholeQty);
    const wholesalePriceParsed = isNaN(parseFloat(wholesalePrice)) ? 0 : parseFloat(wholesalePrice);

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

    // Check if the Product exists by `id` instead of `slug`
    const existingProduct = await db.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Not Found",
        },
        { status: 404 }
      );
    }

    // Ensure `tags` is an array
    const formattedTags = Array.isArray(tags) ? tags : tags.split(",").map(tag => tag.trim());

    // Update the Product
    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        isActive,
        isMultiple,
        isWholesale,
        description,
        sellerId,
        tags: formattedTags,
        imageUrl,
        categoryId,
        salePrice: salePriceParsed,
        productPrice: productPriceParsed,
        barcode,
        sku,
        title,
        slug,
        productCode,
        minimumWholeQty: minimumWholeQtyParsed,
        wholesalePrice: wholesalePriceParsed,
        productStock: productStockParsed,
        qty: qtyParsed,
      },
    });

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating Product:", error);
    return NextResponse.json(
      {
        message: "Failed to update Product",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

