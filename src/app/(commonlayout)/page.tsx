import AboutUsSection from "@/components/home/aboutus";
import HeroCarousel from "@/components/home/banner";
import PopularMenuSmallSlider from "@/components/home/populaeMenu";



export default function Home() {
  return (
    <div  className=" max-w-full h-lvh">
      <HeroCarousel></HeroCarousel>
      <PopularMenuSmallSlider></PopularMenuSmallSlider>
     <div>
       <AboutUsSection></AboutUsSection>
     </div>
    </div>
  );
}
