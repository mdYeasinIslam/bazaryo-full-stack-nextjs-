"use client";

import {
  AppstoreOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Menu } from "antd";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FcElectronics } from "react-icons/fc";
import { Product } from "../libs/interfaces";
import PublicMenuItems from "@/@base/layouts/menu/PublicMenuItems";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "Electronics",
    icon: <FcElectronics />,
    label: "Electronics",
    children: [
      {
        key: "Electronics-1",
        label: "Drone",
      },
      {
        key: "Electronics-2",
        label: "Light",
      },
    ],
  },
  {
    key: "Mobile Accessories",
    icon: <AppstoreOutlined />,
    label: "Mobile Accessories",
    children: [
      {
        key: "1",
        label: "Smart Watch",
      },
      {
        key: "2",
        label: "Neckband",
      },
      {
        key: "3",
        label: "Wireless Headphone",
      },
      {
        key: "4",
        label: "Speaker",
      },
    ],
  },

  {
    key: "Computer Accessories",
    icon: <AppstoreOutlined />,
    label: "Computer Accessories",
    children: [
      {
        key: "Computer-1",
        label: "Mouse & Keyboard",
      },
      {
        key: "Computer-2",
        label: "Pen Drive",
      },
      {
        key: "Computer-3",
        label: "HDD & SSD",
      },
      {
        key: "Computer-4",
        label: "Webcam",
      },
    ],
  },
  {
    key: "Lifestyle",
    icon: <AppstoreOutlined />,
    label: "Lifestyle",
    children: [
      {
        key: "Lifestyle-1",
        label: "Men's Watches",
      },
      {
        key: "Lifestyle-2",
        label: "Women's Watches",
      },
      {
        key: "Lifestyle-3",
        label: "Hair Dryers",
      },
      {
        key: "Lifestyle-4",
        label: "Gift Set",
      },
    ],
  },
];

const heroProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/images/banner/Big_Banner_tv.jpg",
    price: "$199",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/images/banner/Big_Banner_watch.jpg",
    price: "$299",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Laptop Stand",
    image: "/images/banner/Big_Banner_watch.jpg",
    price: "$89",
    category: "Accessories",
  },
  {
    id: 4,
    name: "TV",
    image: "/images/banner/Big_Banner_tv.jpg",
    price: "$149",
    category: "Home & Kitchen",
  },
];

// interface FloatingCardProps {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   className?: string;
// }

// const FloatingCard: React.FC<FloatingCardProps> = ({
//   icon,
//   title,
//   subtitle,
//   className,
// }) => {
//   return (
//     <div
//       className={`absolute bg-white rounded-xl shadow-lg p-4 animate-float ${className}`}
//     >
//       <div className="flex items-center space-x-2">
//         {icon}
//         <div>
//           <div className="text-xs font-semibold text-gray-900">{title}</div>
//           <div className="text-xs text-gray-600">{subtitle}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
      <div className="relative h-full rounded-md shadow-2xl transform  transition-transform duration-500">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full  transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
            <div className="text-white">
              <span className="text-sm bg-blue-600 px-2 py-1 rounded-full">
                {product.category}
              </span>
              <h3 className="text-xl font-bold mt-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-400">
                {product.price}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <BiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <BiChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-5 right-1/2 flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Floating Cards */}
      {/* <FloatingCard
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
      /> */}
    </div>
  );
}

interface IProps {
  products?: Product[];
}

const BusinessBanner: React.FC<IProps> = ({ products = heroProducts }) => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };
  return (
    <section className="relative bg-linear-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Decorative Elements */}
      {/* <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-green-200 rounded-full opacity-30"></div> */}

      <div>
        <div className="grid  lg:grid-cols-8 w-full">
          {/* Left Side */}
          <div className=" hidden lg:block lg:col-span-2! ">
            {/* <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    itemHoverBg: "var(--primary-color-500)",
                  },
                },
              }}
            >
              <Menu
                onClick={onClick}
                style={{ width: 256 }}
                mode="vertical"
                items={items}
                className="w-full! text-base!"
              />
            </ConfigProvider> */}
            <PublicMenuItems />
          </div>
          {/* Right Side - Slider */}
          <div className=" lg:col-span-6  ">
            <ProductSlider products={products} />
          </div>
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
};
export default BusinessBanner;
