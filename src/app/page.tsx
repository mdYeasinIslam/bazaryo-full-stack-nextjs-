import Banner from "@/components/Home/banner/Banner";
import CategoryMarquee from "@/components/Home/categoryMarquee/CategoryMarquee";
import FeaturedProducts from "@/components/Home/FeatureProducts/FeatureProducts";
import WhyChooseUs from "@/components/Home/why-choose-us/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <CategoryMarquee />
      <FeaturedProducts />
      <WhyChooseUs/>
    </div>
  );
}
