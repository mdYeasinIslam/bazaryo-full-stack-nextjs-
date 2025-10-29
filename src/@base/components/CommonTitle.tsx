import React, { ReactNode } from 'react'

type PropType = {
  header: string | ReactNode
    text:string
}

export default function CommonTitle({header,text}:PropType) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {header}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{text}</p>
    </div>
  );
}
