import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="py-20 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-5  gap-5">
          {[...Array(10).keys()].map((_, idx) => {
            const span = idx % 4 == 0 || idx % 4 === 3 ? 2 : 3;
            const col =idx %
            return (
              <div
                key={idx}
                className={`${span == 2 ? "col-span-2" : "col-span-3"} ${
                  idx === 5 && "row-span-6"
                } grid grid-cols-2 max-h-full bg-white border border-gray-300 rounded-xl`}
              >
                <div className="max-h-72 ">
                  <Image
                    src={`/images/card${idx == 2 ? "2" : "1"}.png`}
                    alt="card image"
                    width={500}
                    height={500}
                    className="object-cover object-center  w-full max-h-full"
                  />
                </div>
                <div className="py-5 px-3">
                  <h1 className="text-xl  text-[#101828] font-semibold ">
                    Job & Employer Collaboration
                  </h1>
                  <p className="text-[#344054]">
                    Receive practical SEO tips and engagement insights as you
                    write — ensuring your content not only gets published but
                    performs.
                  </p>
                </div>
              </div>
            );
          })}
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
      </div>
    </section>
  );
}
