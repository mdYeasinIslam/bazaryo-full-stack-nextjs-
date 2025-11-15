import React from "react";
import { BiCart } from "react-icons/bi";

export default function DashboardStaticCard() {
  return (
    <section>
      <div className="container mx-auto flex flex-wrap  md:flex-nowrap justify-evenly md:justify-between gap-3 lg:gap-5">
        {[
          ...Array(4)
            .keys()
            .map((_, idx) => (
              <div
                key={idx}
                className="bg-white w-[90%] md:w-full flex items-center md:items-start lg:items-center justify-between rounded-xl p-3 md:p-5 lg:p-7 text-center md:text-start"
              >
                <div>
                  <p className="text-3xl lg:text-5xl font-semibold">300</p>
                  <h1 className="text-sm lg:text-md text-[#858C9E]">
                    Total Product
                  </h1>
                </div>
                <div className="bg-(--primary-color-50) rounded-xl p-1 lg:p-0">
                  <BiCart className="w-5 h-5 lg:w-7 lg:h-7 text-(--primary-color-600)" />
                </div>
              </div>
            )),
        ]}
      </div>
    </section>
  );
}
