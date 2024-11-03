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
          <Link href="/about" data-aos="fade-up" className='decoration-none text-white text-[14px] font-medium text-white bg-blue-500 border-[1px] border-[#3787c3]  hover:text-[#3787c3] hover:bg-white duration-[0.3s] ease-in-out py-[10px] rounded-[13px] w-[120px] text-center  flex items-center gap-[5px] justify-center' > About Us <FaArrowRight /> </Link>
        </div>
        <div data-aos="zoom-in-left"  className="right  w-[45%] ">
        <Image
  className="w-full" // Use 'w-full' for full width in Tailwind CSS
  src="/assits/images/plumber.jpg"
  alt=""
  width={500}  // Set an appropriate width in pixels
  height={300} // Set the corresponding height in pixels
/>

        </div>
      </div>
  )
}

export default PlumberQuality