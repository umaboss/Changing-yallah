import React from 'react'
import Heading from '../atoms/Heading'
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';

export default function Banner() {
  return (
    <div className='bg-[#f5f4f3]'>
      <div className="baner-bg">
        <div className="py-[15%] px-[3%] grid gap-9">
          <div className='py-[10px] text-white px-[20px] bg-[#3787c3] xl:w-[23%] lg:w-[25%] md:w-[33%] sm:w-[50%] text-center w-[80%]'>
            <Heading level="6" className="xl:text-[14px] md:text-[12px] text-[12px]">WELCOME TO YALLA DO THIS</Heading>
          </div>
          <div className="grid gap-6">
            <Heading level="1">The temperature <br /> of cooling is in your hand.</Heading>
            <Heading level="4" className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[19px] text-[14px]">
              Providing best-in-class air conditioning services <br /> to make your home cooler, more energy-efficient, <br /> and optimized for your comfort
            </Heading>
          </div>
          <div className="bg-[#3787c3] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in  py-[17px] flex justify-center items-center xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className='flex items-center  text-[18px] font-[600]'>
              Contact Us <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
