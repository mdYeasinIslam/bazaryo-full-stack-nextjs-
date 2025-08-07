"use client";

import { useState } from "react";
import { BiHeart, BiMinus, BiPlus, BiStar, BiX } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import DisplayProduct from "./DisplayProduct";

const featuredProducts = [
  {
    id: 1,
    name: "Smartphone X200",
    image: "https://via.placeholder.com/300x200?text=Smartphone",
    price: "$699",
    originalPrice: "$799",
    category: "Electronics",
    rating: 4.8,
    reviews: 124,
    description:
      "Latest flagship smartphone with advanced camera system and lightning-fast performance.",
    features: [
      "6.7-inch OLED Display",
      "128GB Storage",
      "Triple Camera System",
      "5G Ready",
    ],
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    image: "https://via.placeholder.com/300x200?text=Speaker",
    price: "$49",
    originalPrice: "$69",
    category: "Gadgets",
    rating: 4.6,
    reviews: 89,
    description:
      "Portable wireless speaker with premium sound quality and 12-hour battery life.",
    features: [
      "360° Sound",
      "Waterproof IPX7",
      "12h Battery",
      "Voice Assistant",
    ],
    inStock: true,
    badge: "Featured",
  },
  {
    id: 3,
    name: "Air Purifier Pro",
    image: "https://via.placeholder.com/300x200?text=Air+Purifier",
    price: "$199",
    originalPrice: "$249",
    category: "Home & Kitchen",
    rating: 4.9,
    reviews: 156,
    description:
      "Advanced air purification system with HEPA filter for cleaner, healthier air.",
    features: [
      "HEPA H13 Filter",
      "Smart App Control",
      "Quiet Operation",
      "Large Room Coverage",
    ],
    inStock: true,
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/300x200?text=Headphones",
    price: "$129",
    originalPrice: "$159",
    category: "Electronics",
    rating: 4.7,
    reviews: 203,
    description:
      "Premium wireless headphones with active noise cancellation and superior comfort.",
    features: [
      "Active Noise Cancelling",
      "30h Battery Life",
      "Quick Charge",
      "Premium Comfort",
    ],
    inStock: true,
    badge: "New",
  },
  {
    id: 5,
    name: "Smart Watch Series 5",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
    price: "$299",
    originalPrice: "$349",
    category: "Wearables",
    rating: 4.8,
    reviews: 178,
    description:
      "Advanced fitness tracking and smart features in a sleek, durable design.",
    features: [
      "Health Monitoring",
      "GPS Tracking",
      "Water Resistant",
      "7-day Battery",
    ],
    inStock: false,
    badge: "Limited",
  },
  {
    id: 6,
    name: "Coffee Maker Deluxe",
    image: "https://via.placeholder.com/300x200?text=Coffee+Maker",
    price: "$89",
    originalPrice: "$119",
    category: "Home & Kitchen",
    rating: 4.5,
    reviews: 92,
    description:
      "Professional-grade coffee maker with programmable settings and thermal carafe.",
    features: [
      "Programmable Timer",
      "Thermal Carafe",
      "Auto Shut-off",
      "12-Cup Capacity",
    ],
    inStock: true,
    badge: "Sale",
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof featuredProducts)[0] | null
  >(null);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);

  const openQuickView = (product: (typeof featuredProducts)[0]) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-red-500";
      case "Featured":
        return "bg-blue-500";
      case "Top Rated":
        return "bg-green-500";
      case "New":
        return "bg-purple-500";
      case "Limited":
        return "bg-orange-500";
      case "Sale":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Sellers & Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and highly-rated products loved by
            thousands of customers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <DisplayProduct
              key={product.id}
              product={product}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              getBadgeColor={getBadgeColor}
              openQuickView={openQuickView}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
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
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-gray-900">
                      Quantity:
                    </span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <BiMinus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-semibold">
                        {quantity}
                      </span>
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
                        ? "bg-blue-600 text-white hover:bg-blue-700"
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
      )}
    </section>
  );
}
