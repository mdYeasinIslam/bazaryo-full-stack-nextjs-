import axios from "axios";
import { ISignIn, ISignInResponse, ISignUp } from "./interface";
import { paths } from "@/@libs/constants/paths";

const END_POINT = "auth";
export const AuthServices = {
  NAME: END_POINT,
  signIn: async (payload: ISignIn):Promise<ISignInResponse> => {
    try {
      const response = await axios.post(
        `${paths?.apiRoute}/auth/signIn`,
        payload
      );
      return Promise.resolve(response.data);
    } catch (error) {
      console.error("Error during sign in:", error);
      throw error;
    }
  },
  signUp: async (payload: ISignUp) => {
    try {
      const res = await axios.post(
        `${paths?.apiRoute}/auth/create-user`,
        payload
      );
      return Promise.resolve(res.data);
    } catch (error) {
      throw error;
    }
  },
};
