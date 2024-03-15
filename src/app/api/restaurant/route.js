import connectDB from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/models/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

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
    let payload = await request.json();
    await connectDB();
    let result;
    let success = false;
    if (payload.login) {
      result = await restaurantSchema.findOne({
        email: payload.email,
        password: payload.password,
      });
      if (result) {
        success = true;
      }
    } else {
      let restaurant = new restaurantSchema(payload);
      result = await restaurant.save();
      if (result) {
        success = true;
      }
      console.log("Restaurant added:", result);
    }

    return NextResponse.json({ result, success });
  } catch (error) {
    console.error("Error adding restaurant:", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
