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

const signInSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const SignUpModel =
  mongoose.models.SignUpModel || model("SignUpModel", signUpSchema);
// export const SignInModel =mongoose.models.SignInModel || model("SignInModel", signInSchema);
