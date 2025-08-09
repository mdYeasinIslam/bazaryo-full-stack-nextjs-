import mongoose, { model, Schema } from "mongoose";

const signUpSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SignUpModel =
  mongoose.models.SignUpModel || model("SignUpModel", signUpSchema);
