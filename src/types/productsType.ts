export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  badge: string;
};

export type CategoryType = {
  id: number;
  name: string;
  icon: React.ReactNode;
  productCount: string;
  bgColor: string;
  bgGradient: string;
};
