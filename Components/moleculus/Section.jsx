import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Heading from '../atoms/Heading'
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';


function Section() {
    return (
        <div className=''>
            <div className=' px-[6%] py-[10%] '>

                <div className=' gap-[8%] xl:flex xl:flex-row xl:items-center xl:justify-center lg:flex lg:flex-row lg:items-center lg:justify-center md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center flex flex-col items-center justify-center'>
                    <Image
                        className="rounded-md h-[550px] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%]"
                        src="/assits/images/pic8.jpg"
                        alt="Description"
                        width={500} // Set width
                        height={550} // Set height
                    />

                    <div className='left xl:my-0 lg:my-0 md:my-6 sm:my-6 my-8 '>
                        <div className="">
                            {/* <p  className='text-[15px] font-[500]'>Who we are</p> */}
                            <Heading level='2'>Who We are</Heading>
                            <div className="py-[20px] ">
                                {/* <heading className>Our job is to provide you with innovation.</heading> */}
                                <h2 className='text-[22px] font-[700] text-[#091736]'>Our job is to provide you with innovation.</h2>
                            </div>
                            <div className="pb-[10px] ">
                                <Paragraph variant='homepara'>Revitalize your home with our expert renovation services, including stylish updates and functional improvements. Transform your bathroom into a modern retreat with sleek fixtures and smart technology. From concept to completion, we deliver high-quality craftsmanship, ensuring your space is both beautiful and functional. Elevate your living experience today</Paragraph>
                            </div>
                        </div>
                        <div className="py-[20px] flex flex-wrap ">
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Exceed your expectations</Paragraph>
                            </div>
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Professional Expert</Paragraph>
                            </div>
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Deliver 100% satisfaction</Paragraph>
                            </div>
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#3787c3] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Premium support 24/7</Paragraph>
                            </div>
                        </div>
                        <hr />
                        <div >
                            <Link href='/contactus' className='flex items-center text-white text-[14px]  font-[600] '>   
                            <button className='bg-[#3787c3] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in rounded-md  mt-[25px]  py-[13px] px-[30px] xl:w-[30%] lg:w-[35%] md:w-[30%] sm:w-[27%] w-[43%]'>
                            Contact Us  
                            </button></Link>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Section