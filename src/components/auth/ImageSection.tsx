import Image from 'next/image';
import React from 'react'
import logo from "../../../public/logo.png";

export default function ImageSection() {
  return (
    <div className=" flex-1 h-full flex  mt-0 bg-[#F3EEE7] w-full justify-center items-center  ">
      <div>
        <div className="flex  flex-col justify-center items-center gap-5">
          <figure className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Login Illustration"
              width={500}
              height={500}
              className="w-24 h-24 object-cover rounded-lg shadow-md"
            />
          </figure>
          <h1 className="text-4xl pb-5 lg:text-7xl font-laila font-semibold">
            Bazaryo
          </h1>
        </div>
      </div>
    </div>
  );
}
