'use client'
import { FcGoogle } from "react-icons/fc";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
const page = () => {
  const [error,setError] = useState('')
  const formHandler = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    const data = { email, password }
    console.log(data)
    try {
      const response = await fetch("http://localhost:3000/api/auth/signIn", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if(result?.error) setError(result.error)
      } catch (error) {
    console.error("Error during sign in:", error);
  }
}
console.log(error);
  return (
    <section>
      <div className="  mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:h-screen gap-10 px-4 md:px-0">
        {/* form section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg  px-10 py-12 w-full ">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Login</h1>
          <form
            onSubmit={formHandler}
            className="w-full flex flex-col gap-4 max-w-md"
          >
            {
              error.length > 0 && <div className="text-red-500">{error}</div>
            }
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end w-full">
              <Link
                href="/forgetPassword"
                className="text-gray-600 text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-white font-semibold rounded py-3 mt-2 hover:bg-[var(--hover-color)] transition"
            >
              Sign In
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
            Don't have an account?{" "}
            <Link
              href="signUp"
              className="text-[var(--primary-color)] hover:underline pl-1 font-medium"
            >
              Sign up..
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default page;
