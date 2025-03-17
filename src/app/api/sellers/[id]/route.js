import db from "lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const seller = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        sellerProfile: true,
      },
    });

    return NextResponse.json(seller);
  } catch (error) {
    console.error("Error fetching seller:", error);
    return NextResponse.json(
      {
        message: "Failed to get seller",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingSeller = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!existingSeller) {
      return NextResponse.json(
        { data: null, message: "Seller not found" },
        { status: 404 }
      );
    }
    const deletedSeller = await db.sellerProfile.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedSeller);
  } catch (error) {
    console.error("Error fetching seller:", error);
    return NextResponse.json(
      {
        message: "Failed to delete seller",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params:{id} }) {
 // Extract id properly
  try {
    const sellerData = await request.json();

    // Convert id to ObjectId if using MongoDB
    if (!id) {
      return NextResponse.json(
        { message: "Seller ID is required" },
        { status: 400 }
      );
    }

    const existingSeller = await db.sellerProfile.findUnique({
      where: { id },
    });

    if (!existingSeller) {
      return NextResponse.json(
        { data: null, message: "Seller Not Found" },
        { status: 404 }
      );
    }

    const updatedSellerProfile = await db.sellerProfile.update({
      where: { id },
      data: {
        code: sellerData.code,
        isActive: sellerData.isActive,
        notes: sellerData.notes,
        terms: sellerData.terms,
        date: sellerData.date || new Date(),
        contactPersonPhone: sellerData.contactPersonPhone,
        contactPerson: sellerData.contactPerson,
        sellersPhysical: sellerData.sellersPhysical,
        profileImageUrl: sellerData.profileImageUrl,
        email: sellerData.email,
        phone: sellerData.phone,
        name: sellerData.name,
        products: sellerData.products,
        storeSize: parseFloat(sellerData.storeSize),
        mainProduct: sellerData.mainProduct,
        userId: sellerData.userId,
      },
    });

    return NextResponse.json(updatedSellerProfile);
  } catch (error) {
    console.error("Error updating seller:", error);
    return NextResponse.json(
      { message: "Failed to update Seller", error: error.message },
      { status: 500 }
    );
  }
}

