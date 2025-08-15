import { UserInterface } from "@/types/user-interface";
import mongoose, { model, Schema, Model } from "mongoose";
import validator from 'validator'

const userSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      uniqure: [true, "Email is already used"],
      validate:[validator.isEmail,'Invalid email is send {VALUE}'],
      trim: true,
    },
    password: {
      type: String,
      require: true,
      // minLength: [4, 'Password length should have at least 4'],
      // maxLength:[8,'Password lenght should less than 8'],
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin", "seller"],
      default:"user"
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel :Model<UserInterface> =
  mongoose.models.User || model<UserInterface>("User", userSchema);
