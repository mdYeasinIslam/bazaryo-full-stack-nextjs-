import React from 'react'
import Products from './Products';

const ProductSection = () => {
  return (
    <section>
      <div className="">
        <h1 className="text-xl font-semibold">Product list</h1>
        <div>
          <Products/>
        </div>
      </div>
    </section>
  );
}

export default ProductSection