import React, { useEffect } from 'react';
import Container from '../atoms/Container';
import Heading from '../atoms/Heading';
import { LuCrown } from "react-icons/lu";
import { TfiMedall } from "react-icons/tfi";
import { LiaUserCheckSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Relaxation() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div>
      <Container>
        <div className='gap-[50px] pt-[20%] pb-[10%] xl:flex xl:flex-nowrap xl:mt-0 lg:flex lg:flex-nowrap lg:mt-[250px] md:flex md:flex-wrap md:mt-[250px] sm:flex sm:flex-wrap sm:mt-[700px] flex flex-wrap mt-[700px]'>

          {/* First Section (Two Cards) */}
          <div className='grid gap-[10px] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%]'>
            <p className="text-lg font-semibold">Why choose us</p>
            <Heading level='7' className="text-3xl">Relaxation and <br /> your satisfaction.</Heading>
            <p className='text-[16px]'>
              Use our services to keep your home cool. A cool and clean home makes you feel relaxed and brings better satisfaction in your life.
            </p>
          </div>

          {/* Second Section (Cards with Animations) */}
          <div className='flex'>
            <div className='gap-[15px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>

              {/* First Card - Always Active (Exceed your expectations) */}
              {/* <div className='shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px] bg-[#3787c3]'
                data-aos="fade-up" // Animation: Fade up
              >
                <div className='text-[42px] text-[#091736]'>
                  <LuCrown />
                </div>
                <div>
                  <div className='text-[22px] text-white font-[700] leading-[1em] py-[5px]'>
                    Exceed your expectations
                  </div>
                  <p className="text-white">
                    We surpass your expectations with superior quality and exceptional craftsmanship.
                  </p>
                </div>
              </div> */}

              {/* Other Cards with Hover Effect */}

              {[{
                icon: <LuCrown />,
                title: 'Exceed your expectations',
                text: 'We surpass your expectations with superior quality and exceptional craftsmanship.',
                animation: 'fade-up' // Animation: Fade right
              },
              {
                icon: <TfiMedall />,
                title: 'Deliver 100% satisfaction',
                text: 'We deliver 100% satisfaction through exceptional quality and dedicated service.',
                animation: 'fade-right' // Animation: Fade right
              },
              {
                icon: <LiaUserCheckSolid />,
                title: 'Professional Expert',
                text: 'Skilled professionals provide expert solutions with precision, knowledge, and reliability.',
                animation: 'fade-left' // Animation: Fade left
              },
              {
                icon: <MdSupportAgent />,
                title: 'Premium support 24/7',
                text: 'We offer premium support 24/7 for uninterrupted, top-quality assistance.',
                animation: 'fade-up' // Animation: Fade up
              }].map((item, index) => (
                <div
                  key={index}
                  className='shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] mr-[50px] py-[15px] pl-[12px] bg-[#ffffff] hover:bg-[#164B8D] transition-all duration-300 ease-in-out group'
                  data-aos={item.animation} // Set unique animation for each card
                >
                  <div className='text-[42px] text-[#3787c3] group-hover:text-white transition-all duration-300'>
                    {item.icon}
                  </div>
                  <div>
                    <div className='text-[22px] text-[#091736] font-[700] leading-[1em] py-[5px] group-hover:text-white transition-all duration-300'>
                      {item.title}
                    </div>
                    <p className="text-[#091736] group-hover:text-white transition-all duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Relaxation;
