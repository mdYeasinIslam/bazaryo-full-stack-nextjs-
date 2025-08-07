import Banner from "@/components/Home/banner/Banner";
import CategoryMarquee from "@/components/Home/categoryMarquee/CategoryMarquee";
import FeaturedProducts from "@/components/Home/FeatureProducts/FeatureProducts";

export default function Home() {
  return (
    <div>
      <Banner />
      <CategoryMarquee />
      <FeaturedProducts/>
    </div>
  );
}
