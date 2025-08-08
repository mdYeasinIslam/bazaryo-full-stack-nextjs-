import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import React from "react";
import logo from "../../../../public/logo.png";
import Link from "next/link";
const page = () => {


  return (
    <section>
      <div className="  mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-10 px-4 md:px-0">
        {/* form section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg  px-10 py-12 w-full ">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Register</h1>
          <form className="w-full flex flex-col gap-4 max-w-md">
            {/* username */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Alex Gold"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* email */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--primary-color)] text-white font-semibold rounded py-3 mt-2 hover:bg-[var(--hover-color)] transition"
            >
              Register
            </button>
          </form>

          {/* google login  */}
          <div className="w-full flex flex-col max-w-md">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-white border border-green-900 hover:bg-[var(--primary-color)] text-gray-500 font-semibold rounded py-3 mt-4 hover:text-white transition"
            >
              <FcGoogle className="text-xl" />
              <span className="text-sm">Sign in with Google</span>
            </button>
          </div>
          <h1 className="text-gray-400 mt-3">
            Already have an account?{" "}
            <Link
              href="signIn"
              className="text-[var(--primary-color)] hover:underline pl-1 font-medium"
            >
              Sign In..
            </Link>
          </h1>
        </div>

        {/* img section */}
    
      </div>
    </section>
  );
};

export default page;
