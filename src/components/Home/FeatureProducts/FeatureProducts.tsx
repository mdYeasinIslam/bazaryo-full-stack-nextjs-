"use client";
import { useEffect, useState } from "react";
import DisplayProduct from "./DisplayProduct";
import { ProductType } from "@/types/productsType";
import ProductModal from "@/components/Products/Modal/ProductModal";
import CommonTitle from "@/components/shared/CommonTitle";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof featuredProducts)[0] | null
  >(null);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetch("fakeProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
      });
  }, []);

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
        <CommonTitle
          header="Best Sellers & Featured Products"
          text="Discover our most popular and highly-rated products loved by
            thousands of customers"
        />

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
        <ProductModal
          selectedProduct={selectedProduct}
          closeQuickView={closeQuickView}
          getBadgeColor={getBadgeColor}
          setQuantity={setQuantity}
          quantity={quantity}
        />
      )}
    </section>
  );
}
