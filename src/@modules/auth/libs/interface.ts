export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {
  userName: string;
}

export interface ISignInResponse {
  success: boolean;
  user: {
    userName: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updateAt: string;
  };
  token: string;
  message: string;
}
