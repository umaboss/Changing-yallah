import React from 'react'
import Heading from '../atoms/Heading'
import Container from '../atoms/Container'
import { IoCall } from "react-icons/io5";
import AnchorTag from '../atoms/Anchortag';
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import Link from 'next/link';

function Getintouch() {
    return (
       <div className='pt-[5%]'>
         <div className='bg-[#f3f5f9] py-[5%]'>
            <Container>
                <div className='text-center'>
                    <Heading level='2'>Get In Touch</Heading>
                </div>
                <div className='pt-[5%] gap-[50px] xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1 sm:my-[50px] my-[50px]'>
                    {/* Call Section */}
                    <div className='bg-white flex flex-col items-center text-center gap-[20px] justify-center h-[200px] text-[#3787c3] transition-all duration-300 hover:bg-[#3787c3] hover:text-white'>
                        <Link href='tel:00971 50 8786126'>
                            <IoCall className='items-center text-[40px] transition-all duration-300' />
                        </Link>
                        <Link href='tel:00971 50 8786126' className='text-[22px] cursor-pointer font-[500]'>
                            00971 50 8786126
                        </Link>
                    </div>

                    {/* Email Section */}
                    <div className='bg-white flex flex-col items-center text-center gap-[20px] justify-center h-[200px] text-[#3787c3] transition-all duration-300 hover:bg-[#3787c3] hover:text-white'>
                        <Link href='mailto:waqaswqspk@gmail.com'>
                            <IoMdMail className='items-center text-[40px] transition-all duration-300' />
                        </Link>
                        <Link href='mailto:waqaswqspk@gmail.com' className='text-[20px]'>
                            waqaswqspk@gmail.com
                        </Link>
                    </div>

                    {/* Location Section */}
                    <div className='bg-white flex flex-col items-center text-center gap-[20px] justify-center h-[200px] text-[#3787c3] transition-all duration-300 hover:bg-[#3787c3] hover:text-white'>
                        <Link href=''>
                            <IoLocation className='items-center text-[40px] transition-all duration-300' />
                        </Link>
                        <Link href='' className='text-[22px] cursor-pointer font-[500]'>
                            Al Qouz, Dubai
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
       </div>
    )
}

export default Getintouch
