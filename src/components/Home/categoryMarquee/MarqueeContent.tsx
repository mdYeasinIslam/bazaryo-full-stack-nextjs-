import React from 'react'

interface PropType {
    category: {
        id: number;
        name: string;
        icon: React.ReactNode;
        productCount: string;
        bgColor: string;
        bgGradient: string;
    }
}

export default function MarqueeContent({category}:PropType) {
  return (
    <div
      //   onClick={() => handleCategoryClick(category.name)}
      className="flex-shrink-0 mx-4 cursor-pointer group"
    >
      <div
        className={`relative w-72 h-48 bg-gradient-to-br ${category.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-white/80 text-sm">{category.productCount}</p>
            </div>
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              {/* <category.icon className="w-8 h-8 text-white" /> */}
              {category.icon}
            </div>
          </div>

          <div className="flex items-center text-white/90 text-sm font-medium group-hover:text-white transition-colors">
            <span>Shop Now</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
