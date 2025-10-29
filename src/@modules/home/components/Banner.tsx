"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { BiChevronLeft, BiChevronRight, BiLogIn } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

export type Product = {
    id: number;
    name: string;
    image: string;
    price: string;
    category: string;
};

const heroProducts: Product[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        image: "https://i.ibb.co.com/tTGC65xx/2150722661.jpg",
        price: "$199",
        category: "Electronics",
    },
    {
        id: 2,
        name: "Smart Watch",
        image: "https://i.ibb.co.com/TM6sjKfF/2151039302.jpg",
        price: "$299",
        category: "Wearables",
    },
    {
        id: 3,
        name: "Laptop Stand",
        image: "https://i.ibb.co.com/GQ4Mq1vQ/Gear-Branch-laptop-stand-SOURCE-Branch.jpg",
        price: "$89",
        category: "Accessories",
    },
    {
        id: 4,
        name: "Coffee Maker",
        image: "https://i.ibb.co.com/1G4Nrrvy/2151083728.jpg",
        price: "$149",
        category: "Home & Kitchen",
    },
];

type FloatingCardProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
};

function FloatingCard({ icon, title, subtitle, className }: FloatingCardProps) {
    return (
        <div className={`absolute bg-white rounded-xl shadow-lg p-4 animate-float ${className}`}>
            <div className="flex items-center space-x-2">
                {icon}
                <div>
                    <div className="text-xs font-semibold text-gray-900">{title}</div>
                    <div className="text-xs text-gray-600">{subtitle}</div>
                </div>
            </div>
        </div>
    );
}

type ProductSliderProps = {
    products: Product[];
};

function ProductSlider({ products }: ProductSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [products.length]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    }, [products.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    }, [products.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const product = products[currentSlide];

    return (
        <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-96 object-cover transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <div className="text-white">
                            <span className="text-sm bg-blue-600 px-2 py-1 rounded-full">
                                {product.category}
                            </span>
                            <h3 className="text-xl font-bold mt-2">{product.name}</h3>
                            <p className="text-2xl font-bold text-blue-400">{product.price}</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                    <BiChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                    <BiChevronRight className="w-5 h-5" />
                </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    />
                ))}
            </div>
            {/* Floating Cards */}
            <FloatingCard
                icon={
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                    </div>
                }
                title="Free Shipping"
                subtitle="On orders $50+"
                className="-top-4 -left-4"
            />
            <FloatingCard
                icon={
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">24h</span>
                    </div>
                }
                title="Fast Delivery"
                subtitle="Same day shipping"
                className="-bottom-4 -right-4 delay-1000"
            />
        </div>
    );
}

type BannerProps = {
    products?: Product[];
};

export default function Banner({ products = heroProducts }: BannerProps) {
    return (
      <section className="relative  bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>

        <div className="container mx-auto px-6 py-20 flex items-center ">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side */}
            <div className="space-y-8 lg:pr-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <CgShoppingCart className="w-4 h-4 mr-2" />
                Trusted by 10,000+ customers
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Bazaryo</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Products That
                  </span>
                  <br />
                  <span className="text-gray-900">Power Your Life</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Discover amazing products from trusted sellers worldwide. Shop
                with confidence or start selling your own products today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--hover-color)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <CgShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-green-200 hover:bg-green-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <BiLogIn className="w-5 h-5 mr-2" />
                  Login to Sell
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Sellers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            {/* Right Side - Slider */}
            <ProductSlider products={products} />
          </div>
        </div>
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </section>
    );
}
