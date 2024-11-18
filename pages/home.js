"use client";

import React from "react";
import Banner from "@/Components/organisms/Banner";
import Headermain from "@/Components/organisms/Headermain";
import Footer from "@/Components/organisms/Footer";
import Section from "@/Components/moleculus/Section";
import MaintainceService from "@/Components/moleculus/MaintainceService";
import Temperature from "@/Components/moleculus/Temperature";
import Relaxation from "@/Components/moleculus/Relaxation";
import Tempature from "@/Components/moleculus/Tempature";
import WhatsappButton from "../Components/atoms/WhatsappButton"; // Import WhatsApp Button

function Home() {
  return (
    <div className="overflow-hidden">
      <Headermain />
      <Banner />
      <Section />
      <Temperature />
      <MaintainceService />
      <Relaxation />
      <Tempature />
      <Footer />
      <WhatsappButton /> {/* WhatsApp Button yahan add kiya */}
    </div>
  );
}

export default Home;
