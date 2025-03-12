import db from "lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // code,
    //   isActive,
    //   notes,
    //   terms,
    //   date,
    //   contactPersonPhone,
    //   contactPerson,
    //   sellersPhysical,
    //   profileImageUrl,
    //   email,
    //   phone,
    //   name,
    //   products,
    //   storeSize,
    //   mainProduct,
    const sellerData = await request.json();
    const newSellerProfile = await db.sellerProfile.create({
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
    console.log("data", newSellerProfile);
    return NextResponse.json(newSellerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Seller",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const seller = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "SELLER",
      },
      include: {
        sellerProfile: true,
      },
    });
    return NextResponse.json(seller);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to get seller",
        error,
      },
      { status: 500 }
    );
  }
}
