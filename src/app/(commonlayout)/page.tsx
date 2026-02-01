
import HeroCarousel from "@/components/home/banner";
import PopularMenuSmallSlider from "@/components/home/populaeMenu";

import AboutUsSection from "@/components/home/aboutus";
import ReviewCarousel from "@/components/home/reviewsOurCustomer";



export default function Home() {
  return (
    <>
      <HeroCarousel></HeroCarousel>
      <PopularMenuSmallSlider></PopularMenuSmallSlider>
      <AboutUsSection></AboutUsSection>
      <ReviewCarousel></ReviewCarousel>
     
     
    </>
  );
}
