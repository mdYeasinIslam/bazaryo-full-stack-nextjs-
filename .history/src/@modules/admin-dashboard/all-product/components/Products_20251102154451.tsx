import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <div className="grid grid-cols-5 gap-5">
      {[...Array(6).keys()].map((_, idx) => (
        <div
          className={`${idx?'col-span-2'} grid grid-cols-2 max-h-full gap-5 bg-white`}
        >
          <div className="">
            <Image
              src={"/images/card2.png"}
              alt="card image"
              width={500}
              height={500}
              className=""
            />
          </div>
          <div className="py-5">
            <h1 className="text-xl text-[#101828] font-semibold ">
              Job & Employer Collaboration{" "}
            </h1>
            <p className="text-[#344054]">
              Receive practical SEO tips and engagement insights as you write —
              ensuring your content not only gets published but performs.
            </p>
          </div>
        </div>
      ))}
      {/* <div className=" col-span-3 grid grid-cols-2 max-h-full gap-5 bg-white ">
        <div className=" ">
          <Image
            src={"/images/card1.png"}
            alt="card image"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="py-5">
          <h1 className="text-xl text-[#101828] font-semibold ">
            Track placements and payments
          </h1>
          <p className="text-[#344054]">
            Produce exceptional, brand-consistent content in no time — fueled by
            smart algorithms that align with your goals and tone.
          </p>
        </div>
      </div>
      <div className=" col-span-3 grid grid-cols-2 max-h-full gap-5 bg-white ">
        <div className=" w-full">
          <Image
            src={"/images/card2.png"}
            alt="card image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="py-5">
          <h1 className="text-xl text-[#101828] font-semibold ">
            Track placements and payments
          </h1>
          <p className="text-[#344054]">
            Produce exceptional, brand-consistent content in no time — fueled by
            smart algorithms that align with your goals and tone.
          </p>
        </div>
      </div>
      <div className=" col-span-2 grid grid-cols-2 max-h-full gap-5 bg-white ">
        <div className=" w-full">
          <Image
            src={"/images/card4.png"}
            alt="card image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="py-5">
          <h1 className="text-xl text-[#101828] font-semibold ">
            Track placements and payments
          </h1>
          <p className="text-[#344054]">
            Produce exceptional, brand-consistent content in no time — fueled by
            smart algorithms that align with your goals and tone.
          </p>
        </div>
      </div> */}
    </div>
  );
}
