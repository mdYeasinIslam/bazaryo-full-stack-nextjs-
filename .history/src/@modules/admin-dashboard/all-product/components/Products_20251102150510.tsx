import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <div className="grid grid-c">
      <div>
        <Image
          src={"/images/card1.png"}
          alt="card image"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div>
        <h1>Job & Employer Collaboration </h1>
        <p>
          Receive practical SEO tips and engagement insights as you write —
          ensuring your content not only gets published but performs.
        </p>
      </div>
    </div>
  );
}
