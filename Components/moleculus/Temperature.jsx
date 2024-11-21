import React, { useEffect } from 'react';
import Container from '../atoms/Container';
import "../../app/globals.css";
import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import { FaFan } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { PiPipeLight } from "react-icons/pi";
import { MdAutoAwesome, MdOutlineRoofing } from "react-icons/md";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const images = ['/assits/images/bg_img.png'];

function Temperature() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <div className="no-scrollbar relative bg-gray-100 w-full pb-[80px]">
        <Container>
          <div className='text-center pt-[5%] grid gap-[20px]'>
            <Paragraph variant='tempara'>WHAT WE OFFER</Paragraph>
            <Heading level="7" className="xl:text-[50px] xl:w-[50%] xl:ml-[25%] lg:text-[50px] lg:w-[50%] lg:ml-[25%] md:text-[40px] md:w-[50%] md:ml-[25%] sm:text-[30px] sm:w-[50%] sm:ml-[25%] text-[20px] w-[70%] pt-[2%] ml-[15%]">
              The temperature of cooling is in your hand
            </Heading>
            <div className='pt-[3%]'>
              <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                Our services are 24/7. Whenever you want our service, just give a call or message us to serve you better.
              </span>
            </div>
          </div>

          <div className='z-100 gap-5 mt-[6%] items-center justify-center xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
            {/* Service Card 1 - AC Services (Slide from left) */}
            <div className="hover-effect text-center bg-white h-[340px] rounded"
              data-aos="fade-right" // Animation: Slide in from right
              data-aos-duration="1200"
            >
              <div className="flex flex-col p-[20px] items-center justify-center gap-[20px]">
                <div className="icon-container bg-[#3787c3] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-auto mt-[60px]">
                  <FaFan className='icon-container1' />
                </div>
                <div className="grid text-change gap-[20px]">
                  <span className='text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]'>AC Services</span>
                  <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                    AC services and duct cleaning improve air quality, efficiency, and system performance while reducing allergens and dust.
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 2 - Home Renovation (Slide from bottom) */}
            <div className="hover-effect text-center p-[20px] bg-white h-[340px] rounded"
              data-aos="fade-up" // Animation: Slide in from bottom
              data-aos-duration="1200"
            >
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="icon-container bg-[#3787c3] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-auto mt-[60px]">
                  <BsTools  className='icon-container1'/>
                </div>
                <div className="grid text-change gap-[20px]">
                  <span className='text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]'>Home Renovation</span>
                  <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                    We handle home renovation, enhancing style, functionality, and property value.
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 3 - Modern Bathroom (Fade from left) */}
            <div className="hover-effect text-center bg-white h-[340px] rounded"
              data-aos="fade-left" // Animation: Fade in from left
              data-aos-duration="1200"
            >
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="icon-container bg-[#3787c3] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-auto mt-[60px]">
                  <PiPipeLight className='icon-container1' />
                </div>
                <div className="grid text-change gap-[20px]">
                  <span className='text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]'>Modern Bathroom</span>
                  <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                    We transform outdated bathrooms into stylish, modern, and functional spaces.
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 4 - Gypsum Works (Fade from bottom) */}
            <div className="hover-effect text-center p-[20px] bg-white h-[340px] rounded"
              data-aos="fade-up" // Animation: Fade in from bottom
              data-aos-duration="1200"
            >
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="icon-container bg-[#3787c3] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-auto mt-[60px]">
                  <MdAutoAwesome className='icon-container1' />
                </div>
                <div className="grid text-change gap-[20px]">
                  <span className='text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]'>Gypsum Works</span>
                  <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                    We install gypsum partitions and ceilings for stylish, functional interior spaces.
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 5 - Paint Works (Slide from right) */}
            <div className="hover-effect text-center p-[20px] bg-white h-[340px] rounded"
              data-aos="fade-right" // Animation: Fade in from right
              data-aos-duration="1200"
            >
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="icon-container bg-[#3787c3] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-auto mt-[60px]">
                  <MdOutlineRoofing className='icon-container1' />
                </div>
                <div className="grid text-change gap-[20px]">
                  <span className='text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]'>Paint Works</span>
                  <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                    We apply Fenomastic and texture paints for vibrant, durable wall finishes.
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 6 - Tile Fixing (Slide from bottom) */}
            <div className="hover-effect p-[20px] text-center bg-white h-[340px] rounded"
              data-aos="fade-up" // Animation: Slide up from bottom
              data-aos-duration="1200" 
            >
              <div className="flex flex-col items-center justify-center gap-[20px]">
                <div className="icon-container bg-[#3787c3] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-auto mt-[60px]">
                  <FaFan className='icon-container1' />
                </div>
                <div className="grid text-change gap-[20px]">
                  <span className='text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]'>Tile Fixing</span>
                  <span className='leading-[25px] text-[#8b8a8a] text-[16px] font-[500] tracking-wide'>
                    We specialize in precise tile fixing for smooth, long-lasting, and attractive surfaces.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </div>
  );
}

export default Temperature;
