import Banner from "@/components/Home/banner/Banner";
import CategoryMarquee from "@/components/Home/categoryMarquee/CategoryMarquee";
import CTASection from "@/components/Home/CTA-section/CTASection";
import FeaturedProducts from "@/components/Home/FeatureProducts/FeatureProducts";
import Testimonials from "@/components/Home/testimonial/Testimonial";
import WhyChooseUs from "@/components/Home/why-choose-us/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <CategoryMarquee />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection/>
    </div>
  );
}
