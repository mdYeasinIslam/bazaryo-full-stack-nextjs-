import connectMongoose from "@/@libs/config/mongodb";
import { UserModel } from "@/models/auth";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.method !== "POST")
    return NextResponse.json(
      { success: false, message: "Method is not allowed" },
      { status: 405 }
    );

  try {
    await connectMongoose();

    const { userName, email, password, role } =await request?.json();
    if (!userName || !email || !password)
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );

    const existingUser = await UserModel.findOne({ email });
    
    if (existingUser)
      return NextResponse.json(
        { success: false, message: "Email already registered. Please log in." },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      userName,
      email,
      password: hashedPassword,
      role: role ? role : "user",
    });
    return NextResponse.json({
      success:true,
      message: "Account is created successfully",
      user: newUser,
    },{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
