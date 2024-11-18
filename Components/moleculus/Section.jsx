import React, { useEffect } from 'react';
import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../organisms/Contact';
import Container from '../atoms/Container';

function Section() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <Container>
      <div className=' py-[10%]'>
      <div className='gap-[8%] xl:flex xl:flex-row xl:items-center xl:justify-center lg:flex lg:flex-row lg:items-center lg:justify-center md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center flex flex-col items-center justify-center'>

        {/* Image Section - Animates from Left */}
        <div 
          className="w-full xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] mb-8 xl:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            className="rounded-md h-[550px] w-full object-cover"
            src="/assits/images/session.jpg"
            alt="Description"
            width={500}
            height={550}
          />
        </div>

        {/* Content Section - Animates from Right */}
        <div 
          className='left xl:my-0 lg:my-0 md:my-6 sm:my-6 my-8 w-full xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%]' 
          data-aos="fade-left" 
          data-aos-duration="1000"
        >
          <Heading level='2'>Who We are</Heading>
          <div className="py-[20px]">
            <h2 className='text-[22px] font-[700] text-[#091736]'>
              Our job is to provide you with innovation.
            </h2>
          </div>

          <div className="pb-[10px]">
            <Paragraph variant='homepara'>
              Revitalize your home with our expert renovation services, including stylish updates and functional improvements. Transform your bathroom into a modern retreat with sleek fixtures and smart technology. From concept to completion, we deliver high-quality craftsmanship, ensuring your space is both beautiful and functional. Elevate your living experience today.
            </Paragraph>
          </div>

          {/* List of Benefits with Icons */}
          <div className="py-[20px] flex flex-wrap">
            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
              <div className="bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                <FaCheck />
              </div>
              <Paragraph variant='homepara'>Exceed your expectations</Paragraph>
            </div>
            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
              <div className="bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                <FaCheck />
              </div>
              <Paragraph variant='homepara'>Professional Expert</Paragraph>
            </div>
            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
              <div className="bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                <FaCheck />
              </div>
              <Paragraph variant='homepara'>Deliver 100% satisfaction</Paragraph>
            </div>
            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
              <div className="bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                <FaCheck />
              </div>
              <Paragraph variant='homepara'>Premium support 24/7</Paragraph>
            </div>
          </div>

          <hr />

          {/* Contact Us Button */}
          <div className="hover-fill-from-bottom leading-[30px] py-[11px] flex justify-center items-center w-[38%] mt-[20px]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
    </Container>
  );
}

export default Section;
