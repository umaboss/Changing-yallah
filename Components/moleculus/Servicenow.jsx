import React from 'react'
import Heading from '../atoms/Heading'
import AnchorTag from '../atoms/Anchortag'
import Link from 'next/link'

function Servicenow() {
  return (
    <div className='w-[100%] bg-[#f3f5f9] '>
        <div className='text-center text-[#ffff] items-center m-auto py-[35px] relative z-9 mt-[-99px] bg-[#3787c3] xl:w-[500px]  lg:w-[500px] xl:h-[140px] lg:h-[140px] md:h-[140px] md:w-[100%] sm:w-[100%] sm:bottom-[-20px] sm:h-[150px] w-[100%] h-[150px]'>
            <Heading level='3' className=''>BOOK YOUR SERVICE NOW</Heading>
            <Link href="tel:00971508786126" className="md:text-[50px] sm:text-[25px]  xl:text-[60px]  text-[25px] text-white xl:font-[700] lg:font-[700] md:font-[700] sm:font-[600] font-[600] xl:leading-[70px] lg:leading-[60px] md:leading-[60px] sm:leading-[50px] leading-[40px] tracking-[-2px]">
                00971 50 8786126
            </Link>
        </div>
    </div>
  )
}

export default Servicenow
