import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createTransport } from "nodemailer";

const otpStore: { [email: string]: { code: string; expiry: number } } = {};

const generateOTP = () => {
    return crypto.randomInt(100000,999999).toString()
}

export async function POST(req: NextRequest) {
    if (req.method !== "POST") {
        return NextResponse.json({message:'Method not allowed'},{status:405})
    }
    const { email } =await req.json() 
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
    console.log(email)
    try {
        const otp = generateOTP()
        const expirytime = Date.now() + 1 * 60 * 1000;

        otpStore[email] = { code: otp, expiry: expirytime }
        const transporter = createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          auth: {
            user: "arno31@ethereal.email",
            pass: "eAyW21sv5GuMmm1cQC",
          },
        });
        const mailOptions = {
          from: "arno31@ethereal.email",
          to: email,
          subject: "Password Reset OTP",
          html: `<p>Hello,</p>
                   <p>Your One-Time Password (OTP) for password reset is: <strong>${otp}</strong></p>
                   <p>This OTP is valid for 10 minutes.</p>
                   <p>If you did not request this, please ignore this email.</p>`,
        };
        await transporter.sendMail(mailOptions);

        console.log(`OTP ${otp} sent to ${email}`);

        // Return a success message to the client
        return NextResponse.json({ message: "OTP sent successfully!" },{status:201});      
    } catch (error) {
        return NextResponse.json({error,message:"An error is occured"})
    }
}