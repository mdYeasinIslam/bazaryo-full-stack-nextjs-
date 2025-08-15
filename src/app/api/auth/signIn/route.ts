import connectMongoose from "@/libs/mongodb";
import { UserModel } from "@/models/auth";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
const jwt_secret = process.env.JWT_SECRET as string;

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  if (request.method !== "POST")
    return res.status(405).json({ message: "Method is not allowed" });

  try {
    await connectMongoose();

    const { email, password } = request.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const findUser = await UserModel.findOne({ email, password });
    if (!findUser)
      return res.status(400).json({ message: "Invalid credentials" });
    console.log(findUser);

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      {userId:findUser._id,email:findUser.email}, jwt_secret,
    {expiresIn:'1h'}
    )
    return res
      .status(200)
      .json({ user: findUser,token:token, message: "You are successfully logged in"});
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
}
