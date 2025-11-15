import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex w-full">
        <div className="flex-1">
          <Image
            src={"/images/card1.png"}
            alt="card image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-xl text-[#101828] font-semibold ">
            Job & Employer Collaboration{" "}
          </h1>
          <p className="text-[#344054]">
            Receive practical SEO tips and engagement insights as you write —
            ensuring your content not only gets published but performs.
          </p>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex-1">
          <Image
            src={"/images/card2.png"}
            alt="card image"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-xl text-[#101828] font-semibold ">
            Track placements and payments
          </h1>
          <p className="text-[#344054]">
            Produce exceptional, brand-consistent content in no time — fueled by
            smart algorithms that align with your goals and tone.
          </p>
        </div>
      </div>
    </div>
  );
}
