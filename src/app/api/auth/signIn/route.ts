import connectMongoose from "@/libs/mongodb";
import { UserModel } from "@/models/auth";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";


const jwt_secret = process.env.JWT_SECRET as string;

export async function POST(request: NextRequest, res: NextResponse) {
  if (request.method !== "POST")
    return NextResponse.json(
      { message: "Method is not allowed" },
      { status: 405 }
    );


  try {
    await connectMongoose();

    const { email, password } = await request.json();
    if (!email || !password)
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 400 }
      );

    const findUser = await UserModel.findOne({ email, password });
    if (!findUser)
      return NextResponse.json({ message: "Invalid credentials" },{status:400});
    console.log(findUser);

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch)
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );

    const token = jwt.sign(
      {userId:findUser._id,email:findUser.email}, jwt_secret,
    {expiresIn:'1h'}
    )
    return NextResponse.json({
      user: findUser,
      token: token,
      message: "You are successfully logged in",
    },{status:200});
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error },
      { status: 500 }
    );
  }
}
