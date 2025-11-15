import connectMongoose from "@/@libs/config/mongodb";
import { UserModel } from "@/models/auth";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";


const jwt_secret = process.env.JWT_SECRET as string;

export async function POST(request: NextRequest) {
  if (request.method !== "POST")
    return NextResponse.json(
      { success: false, message: "Method is not allowed" },
      { status: 405 }
    );
  try {
    await connectMongoose();

    const { email, password } = await request.json();
    if (!email || !password)
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );

    const findUser = await UserModel.findOne({email});
    if (!findUser)
      return NextResponse.json(
        { success: false, message: "Invalid credentials, user not found" },
        { status: 400 }
      );

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch)
      return NextResponse.json(
        {success:false, message: "Invalid credentials" },
        { status: 400 }
      );
    const token = jwt.sign(
      {userId:findUser._id,email:findUser.email}, jwt_secret,
    {expiresIn:'1h'}
    )
    return NextResponse.json({
      success:true,
      user: findUser,
      token: token,
      message: "You are successfully logged in",
    },{status:200});
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
