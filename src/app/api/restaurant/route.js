import connectDB from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/models/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET() {
//   connectDB();
//   const data = await restaurantSchema.find();
//   console.log(data);
//   return NextResponse.json({ result: data });
// }

// export async function POST(request) {
//   let payload = await request.json();
//   await connectDB();
//   let restaurant = new restaurantSchema(payload);
//   result = await restaurant.save();
//   console.log(payload);
//   return NextResponse.json({ result, success: true });
// }

export async function GET() {
  try {
    await connectDB();
    const data = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}

export async function POST(request) {
  try {
    await connectDB();
    let payload = await request.json();
    let restaurant = new restaurantSchema(payload);
    let result = await restaurant.save();
    console.log("Restaurant added:", result);
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error adding restaurant:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
