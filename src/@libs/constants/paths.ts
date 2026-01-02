export const paths = {
  root: "/",
  auth: {
    login: "/signIn",
    signUp: "/signUp",
    forgotPassword: "/forgetPassword",
  },
  admin: {
    root: "/admin",
    product: {
      list: "/admin/all-product",
      add: "/admin/add-product",
    },
  },
  publicRoot: {
    about: "/about",
    contact: "/contact",
    products: {
      electronics: "electronics",
      mobile_accessories: "mobile_accessories",
      computer_accessories: "computer_accessories",
      lifestyle: "lifestyle",
    },
  },
  apiRoute: "http://localhost:3000/api",
};