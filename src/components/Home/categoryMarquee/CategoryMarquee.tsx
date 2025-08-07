import Marquee from "react-fast-marquee";
import {
  MdSmartphone,
  MdHome,
  MdSportsEsports,
  MdWatch,
  MdHeadphones,
  MdCameraAlt,
  MdDirectionsCar,
  MdCheckroom,
  MdMenuBook,
  MdFitnessCenter,
  MdChildCare,
  MdCardGiftcard,
} from "react-icons/md";
import MarqueeContent from "./MarqueeContent";

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <MdSmartphone size={40} />,
    productCount: "2,500+ products",
    bgColor: "bg-blue-500",
    bgGradient: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Home & Kitchen",
    icon: <MdHome size={40} />,
    productCount: "1,800+ products",
    bgColor: "bg-green-500",
    bgGradient: "from-green-400 to-green-600",
  },
  {
    id: 3,
    name: "Gadgets",
    icon: <MdSportsEsports size={40} />,
    productCount: "950+ products",
    bgColor: "bg-purple-500",
    bgGradient: "from-purple-400 to-purple-600",
  },
  {
    id: 4,
    name: "Wearables",
    icon: <MdWatch size={40} />,
    productCount: "650+ products",
    bgColor: "bg-orange-500",
    bgGradient: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    name: "Accessories",
    icon: <MdHeadphones size={40} />,
    productCount: "1,200+ products",
    bgColor: "bg-pink-500",
    bgGradient: "from-pink-400 to-pink-600",
  },
  {
    id: 6,
    name: "Photography",
    icon: <MdCameraAlt size={40} />,
    productCount: "420+ products",
    bgColor: "bg-indigo-500",
    bgGradient: "from-indigo-400 to-indigo-600",
  },
  {
    id: 7,
    name: "Automotive",
    icon: <MdDirectionsCar size={40} />,
    productCount: "780+ products",
    bgColor: "bg-red-500",
    bgGradient: "from-red-400 to-red-600",
  },
  {
    id: 8,
    name: "Fashion",
    icon: <MdCheckroom size={40} />,
    productCount: "3,200+ products",
    bgColor: "bg-teal-500",
    bgGradient: "from-teal-400 to-teal-600",
  },
  {
    id: 9,
    name: "Books & Media",
    icon: <MdMenuBook size={40} />,
    productCount: "1,500+ products",
    bgColor: "bg-yellow-500",
    bgGradient: "from-yellow-400 to-yellow-600",
  },
  {
    id: 10,
    name: "Sports & Fitness",
    icon: <MdFitnessCenter size={40} />,
    productCount: "890+ products",
    bgColor: "bg-cyan-500",
    bgGradient: "from-cyan-400 to-cyan-600",
  },
  {
    id: 11,
    name: "Baby & Kids",
    icon: <MdChildCare size={40} />,
    productCount: "1,100+ products",
    bgColor: "bg-rose-500",
    bgGradient: "from-rose-400 to-rose-600",
  },
  {
    id: 12,
    name: "Gifts & Crafts",
    icon: <MdCardGiftcard size={40} />,
    productCount: "670+ products",
    bgColor: "bg-violet-500",
    bgGradient: "from-violet-400 to-violet-600",
  },
];
const CategoryMarquee = () => {
  return (
    <section
      id="hobby"
      className="bg-gradient-to-r from-white via-blue-50 to-green-200  text-white py-20 px-6 "
    >
      <div className="container mx-auto   space-y-10">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover thousands of products across all your favorite categories
            </p>
          </div>
        </div>
        <Marquee className="!w-full ">
          {categories?.map((category, index) => (
            <MarqueeContent key={index} category={category} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default CategoryMarquee;
