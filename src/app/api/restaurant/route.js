import connectDB from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/models/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  connectDB();
  const data = await restaurantSchema.find();
  console.log(data);
  return NextResponse.json({ result: data });
}
