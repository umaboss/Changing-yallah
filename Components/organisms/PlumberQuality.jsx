import React from 'react'
import PlumberFeature from '../moleculus/PlumberFeature'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const PlumberQuality = () => {
  return (
      <div className=' w-[100%] items-center mt-[70px] px-[8%] flex justify-between'>
        <div className="left  flex flex-col  w-[48%] gap-[20px] ">
          <h2 data-aos="fade-up" data-aos-duration="1000" className=' text-[44px] leading-[50px] font-semibold ' >We Focus on Customer Satisfaction and Quality</h2>
          <p data-aos="fade-up" data-aos-duration="1500" className='font-medium  ' >Use and re-use tons of responsive sections too a main create the perfect layout. Sections are firmly of organised into the perfect starting categories</p>
          <h3 data-aos="fade-up" data-aos-duration="2000" className=' text-[22px] font-semibold ' >A snapshot of PlumbCare's features:</h3>
          <div className=" flex flex-wrap  w-[90%] justify-between ">
            <div className="flex flex-col gap-[8px] ">
              <PlumberFeature data-aos="fade-up" data-aos-duration="2000" text='experienced plumbers' />
              <PlumberFeature data-aos="fade-up" data-aos-duration="2500" text='24/7 emergency service' />
              <PlumberFeature data-aos="fade-up" data-aos-duration="3000" text='competitive pricing' />
            </div>
            <div className="flex flex-col gap-[8px] ">
              <PlumberFeature data-aos="fade-up" data-aos-duration="2000" text='customer satisfication gaurantee' />
              <PlumberFeature data-aos="fade-up" data-aos-duration="2500" text='eco-friendly options ' />
              <PlumberFeature data-aos="fade-up" data-aos-duration="3000" text='transparent comunications' />
            </div>
          </div>
          <div className="hover-fill-from-bottom leading-[30px] py-[11px] flex justify-center items-center xl:w-[30%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              About Us 
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in-left"  className="right  w-[45%] ">
        <Image
  className="w-full" // Use 'w-full' for full width in Tailwind CSS
  src="/assits/Plumbing Services/aboutplum.jpg"
  alt=""
  width={500}  // Set an appropriate width in pixels
  height={300} // Set the corresponding height in pixels
/>

        </div>
      </div>
  )
}

export default PlumberQuality