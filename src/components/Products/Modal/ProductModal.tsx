import { ProductType } from '@/types/productsType';
import React, { Dispatch, SetStateAction } from 'react'
import { BiMinus, BiPlus, BiStar, BiX } from 'react-icons/bi'
import { CiShoppingCart } from 'react-icons/ci';

type PropType = {
  selectedProduct: ProductType;
  closeQuickView: () => void;
  getBadgeColor: (
    badge: string
  ) =>
    | "bg-red-500"
    | "bg-blue-500"
    | "bg-green-500"
    | "bg-purple-500"
    | "bg-orange-500"
    | "bg-pink-500"
    | "bg-gray-500";
  setQuantity: Dispatch<SetStateAction<number>>;
  quantity: number;
};

export default function ProductModal({
  selectedProduct,
  closeQuickView,
  getBadgeColor,
  setQuantity,
  quantity,
}: PropType) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">Quick View</h3>
          <button
            onClick={closeQuickView}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <BiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="relative">
            <img
              src={selectedProduct.image || "/placeholder.svg"}
              alt={selectedProduct.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div
              className={`absolute top-4 left-4 ${getBadgeColor(
                selectedProduct.badge
              )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
            >
              {selectedProduct.badge}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-blue-600 font-medium">
                {selectedProduct.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                {selectedProduct.name}
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <BiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(selectedProduct.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">
                {selectedProduct.rating} ({selectedProduct.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                {selectedProduct.price}
              </span>
              <span className="text-xl text-gray-500 line-through">
                {selectedProduct.originalPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Key Features:
              </h4>
              <ul className="space-y-2">
                {selectedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <BiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <BiPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                disabled={!selectedProduct.inStock}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  selectedProduct.inStock
                    ? "bg-[var(--primary-color)] text-white hover:bg-[var(--hover-color)]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <CiShoppingCart className="w-5 h-5" />
                <span>
                  {selectedProduct.inStock
                    ? `Add ${quantity} to Cart`
                    : "Out of Stock"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
