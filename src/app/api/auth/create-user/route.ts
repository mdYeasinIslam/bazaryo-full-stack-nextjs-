import connectMongoose from "@/libs/mongodb";
import { UserModel } from "@/models/auth";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, res: NextResponse) {
  if (request.method !== "POST")
    return NextResponse.json({ message: "Method is not allowed" }, { status: 405 });

  try {
    await connectMongoose();

    const { name, email, password, role } =await request?.json();
    // console.log(name,email,password)
    if (!name || !email || !password)
      return NextResponse.json({
        message: "All fields are required",
      },{status:400});

    const existingUser = await UserModel.findOne({ email: email });
    
    if (existingUser)
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: role ? role : "user",
    });
    return NextResponse.json({
      message: "Account is created successfully",
      user: newUser,
    },{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse
      .json({ message: "Internal server error", error: error },{status:500});
  }
}
