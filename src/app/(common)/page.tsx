import Banner from "@/@modules/home/components/Banner";
import CategoryMarquee from "@/@modules/home/components/CategoryMarquee";
import CTASection from "@/@modules/home/components/CTASection";
import FeaturedProducts from "@/@modules/home/components/FeatureProducts";
import WhyChooseUs from "@/@modules/home/components/WhyChoose";

const Home:React.FC = () => {
  return (
    <div>
      <Banner />
      <CategoryMarquee />
      <FeaturedProducts />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <CTASection />
    </div>
  );
};
export default Home;
