import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Container from '../atoms/Container';


const PlumberResponse = () => {
    return (
        <Container>
            <div className=' mt-[50px] mb-[50px]  flex justify-between items-center ' >
            <div className="flex w-[48%] justify-between ">
                <img data-aos="fade-right" data-aos-duration="1000" className='w-[100%] rounded-[10px] h-[500px]' src="/assits/Plumbing Services/res.jpg" alt="" />
            </div>
            <div data-aos="zoom-in-left" className=" flex flex-col gap-[15px] w-[47%] ">
                <h3 data-aos="fade-up-left" data-aos-duration="1000" className=' text-[33px] font-semibold w-[300px]  ' >We Respond to
                    Your Call Quickly</h3>
                <p data-aos="fade-up-left" data-aos-duration="1500" className=' text-[15px] text-gray-500 font-medium ' >You can trust our plumbers and the quality
                    professionalism of our work. Every residential plumbing
                    technician for the uniformed and badged, and will arrive
                    at your home.</p>
                    <Link href="/contactus" className="hover-fill-from-bottom cursor-pointer leading-[30px] py-[11px] flex justify-center items-center xl:w-[30%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us 
            </Link>
          </Link>

            </div>
        </div>
        </Container>
    )
}

export default PlumberResponse