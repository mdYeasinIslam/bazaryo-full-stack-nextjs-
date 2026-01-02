import BusinessBanner from "@/@modules/home/components/BusinessBanner";
import CategoryMarquee from "@/@modules/home/components/CategoryMarquee";
import FeaturedProducts from "@/@modules/home/components/FeatureProducts";
import WhyChooseUs from "@/@modules/home/components/WhyChoose";

const Home:React.FC = () => {
  return (
    <>
      <BusinessBanner />
      <CategoryMarquee />
      <FeaturedProducts />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      {/* <CTASection /> */}
    </>
  );
};
export default Home;
