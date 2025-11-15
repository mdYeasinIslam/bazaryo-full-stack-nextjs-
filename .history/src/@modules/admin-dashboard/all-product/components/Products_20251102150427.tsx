import Image from "next/image";
import React from "react";

export default function Products() {
  return (
    <div>
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
        
      </div>
    </div>
  );
}
