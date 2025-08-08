import connectMongoose from "@/libs/mongodb";
import { SignUpModel } from "@/models/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    await connectMongoose();
    const findUser = await SignUpModel.findOne({ email: email });
    return NextResponse.json(
      { user: findUser, message: "You are successfully logged in" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "An error is occured",
      error,
    });
  }
}
