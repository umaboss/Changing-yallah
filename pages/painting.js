import React from "react";
import "../app/globals.css";
import HeroSection from "@/Components/moleculus/HeroSection";
import Container from "@/Components/atoms/Container";
import HousePaintingSection from "@/Components/moleculus/HousePaintingSection";
import PaintProcessPortion from "@/Components/organisms/PaintProcessPortion";
import PaintServSection from "@/Components/moleculus/PaintServSection";
import Headermain from "@/Components/organisms/Headermain";
import Footer from "@/Components/organisms/Footer";
import ReadyToGetStared from "@/Components/moleculus/ReadyToGetStared";

const PaintingPortion = () => {
  return (
    <>
      <Headermain />
      {/*yay div is leay bny h k image na he bg pr fit ho rahe the or na he img tag mn */}
      <div className=" mb-[60px] bg-black relative bg-no-repeat w-full bg-cover items-center justify-center overflow-hidden">
        <img className="" src="/assits/images/bannerpnt1.png" alt="banner" />
        <h2 className="text-white text-center z-30 font-semibold absolute  top-[40%] xl:left-[40%] xl:text-[36px] lg:text-[30px] md:left-[40%] md:text-[26px] sm:left-[35%] sm:text-[26px] left-[29%] text-[20px]">
          {" "}
          Paiting & Portion
        </h2>
      </div>
      <Container>

        <HeroSection
          children1="Our company, the Dubai Painting Services aims at offering excellent house painting services in the UAE. You can be assured of our efficient team to transform your house into an artistic masterpiece as you seek painting services. Whether you want a few rooms painted inside your home, or you need a complete makeover of the outside of your home, we can help."
          src="/assits/images/herimage.jpg"
        />
        <HousePaintingSection />
        <PaintProcessPortion />
      </Container>
      <PaintServSection />
      <ReadyToGetStared />
      <Footer />
    </>
  );
};

export default PaintingPortion;
