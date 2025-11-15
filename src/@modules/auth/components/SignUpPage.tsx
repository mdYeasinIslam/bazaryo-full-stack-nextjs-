"use client";
import { FcGoogle } from "react-icons/fc";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { Button, Form, FormProps, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const SignUpPage = () => {
  const [error, setError] = useState("");
  const formHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const data = { name, email, password };
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/auth/signIn", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result?.error) setError(result.error);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

    const onFinish:FormProps<FieldType>['onFinish'] = (values) => {
        console.log(values)
    }
    const onFinishFailed : FormProps<FieldType>['onFinishFailed'] = (error) => {
        console.log(error)
    }
  return (
    <section>
      <div className=" mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-10 px-4 md:px-0">
        {/* form section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg  px-10 py-12 w-full ">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Register</h1>
          {/* <form className="w-full flex flex-col gap-4 max-w-md">
           
            {error.length > 0 && <div className="text-red-500">{error}</div>}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Alex Gold"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
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

            <button
              type="submit"
              className="bg-(--primary-color-700) text-white font-semibold rounded py-3 mt-2 hover:bg-(--hover-color) transition"
            >
              Register
            </button>
          </form> */}
          <Form
            name="signup"
            layout="vertical"
            className="max-w-md! w-full"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            scrollToFirstError={true}
            size="large"
            rootClassName="[&_.ant-form-item-label]:p-0! "
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="m-0! "
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              className="m-0!"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
              className="m-0!"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="default"
                className="bg-(--primary-color-800)! text-white! w-full mt-3 border! border-(--primary-color-800)!"
                htmlType="submit"
                size="large"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          {/* google login  */}
          <div className="w-full flex flex-col max-w-md">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-white border border-green-900 hover:bg-(--primary-color-700) text-gray-500 font-semibold rounded py-3 hover:text-white transition"
            >
              <FcGoogle className="text-xl" />
              <span className="text-sm">Sign in with Google</span>
            </button>
          </div>
          <h1 className="text-gray-400 pt-3">
            Already have an account?{" "}
            <Link
              href="signIn"
              className="text-(--primary-color-700) hover:underline pl-1 font-medium"
            >
              Sign In..
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
