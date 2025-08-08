import connectMongoose from "@/libs/mongodb"
import { SignUpModel } from "@/models/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
   try {
       const { name,email, password,role} = await request.json()
       await connectMongoose();
       if (name && email && password) {
        await SignUpModel.create({ name, email, password,role:role?role:'user'});
        return NextResponse.json({message:"Your account is successfully created"},{status:201})
       }
       return NextResponse.json({message:'Data is required'})
   } catch (error) {
    return NextResponse.json(
      { message: "An error is occured",error:error }
    );
   }
   
}