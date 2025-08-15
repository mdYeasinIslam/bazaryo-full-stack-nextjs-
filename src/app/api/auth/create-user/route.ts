import connectMongoose from "@/libs/mongodb";
import { UserModel } from "@/models/auth";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  if (request.method !== "POST")
    return res.status(405).json({ message: "Method is not allowed" });
  try {
    await connectMongoose();

    const { name, email, password, role } = request.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await UserModel.findOne(email);
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password:hashedPassword,
      role: role ? role : "user",
    });
    return res.status(201).json(
      { message: "Account is created successfully",user:newUser}
    );
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error });
  }
}
