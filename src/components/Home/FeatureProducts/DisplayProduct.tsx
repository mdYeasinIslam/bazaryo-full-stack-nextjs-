import { ProductType } from "@/types/productsType";
import React from "react";
import { BiHeart, BiStar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

interface PropType {
  product: ProductType;
  toggleFavorite: (productId: number) => void;
  favorites: number[];
  getBadgeColor: (
    badge: string
  ) =>
    | "bg-blue-500"
    | "bg-green-500"
    | "bg-purple-500"
    | "bg-orange-500"
    | "bg-pink-500"
    | "bg-red-500"
    | "bg-gray-500";
  openQuickView: (product:ProductType) => void;
}

export default function DisplayProduct({
  product,
  toggleFavorite,
  favorites,
  getBadgeColor,
  openQuickView,
}: PropType) {
  return (
    <div
      key={product.id}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Badge */}
      <div
        className={`absolute top-4 left-4 z-10 ${getBadgeColor(
          product.badge
        )} text-white px-3 py-1 rounded-full text-xs font-semibold`}
      >
        {product.badge}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
      >
        <FaHeart
          className={`w-5 h-5 ${
            favorites.includes(product.id)
              ? "text-red-500 fill-current"
              : "text-gray-600"
          }`}
        />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => openQuickView(product)}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <BsEye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-blue-600 font-medium">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <BiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              {product.originalPrice}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!product.inStock}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
            product.inStock
              ? "bg-[var(--primary-color)] text-white hover:bg-[var(--hover-color)]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <CgShoppingCart className="w-4 h-4" />
          <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
        </button>
      </div>
    </div>
  );
}
