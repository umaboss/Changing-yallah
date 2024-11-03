import React from 'react'
import Container from '../atoms/Container'
import Image from 'next/image'

function Electricban1() {
  return (
    <Container>
      <div className='my-[60px] xl:flex xl:flex-nowrap xl:items-center xl:justify-between lg:flex lg:flex-nowrap lg:items-center lg:justify-between md:flex md:flex-wrap md:items-center md:justify-center sm:flex sm:flex-wrap sm:items-center sm:justify-center flex flex-wrap items-center justify-center'>
        <div className=' flex flex-col gap-[20px] xl:w-[48%]  lg:w-[48%]  md:w-[100%] sm:w-[100%]  w-[100%]'>
          <h1 className='text-[34px] font-semibold leading-[41px] text-[black]'>Get Reliable & Affordable Tile Fix Dubai Services From Us!</h1>
          <p className='text-[18px] font-400 leading-[35px] text-[black]'>Our electrical works offer reliable, safe, and efficient solutions for all your needs. From installations and repairs to maintenance, our certified electricians ensure compliance with safety standards and industry best practices. We handle residential and commercial projects with precision, delivering high-quality results and excellent customer service every time.
          </p>
          {/* <p className="text-[17px] font-400 leading-[35px] text-[black]">If you need tile installation or repair services in Dubai, then please contact us today. We would be happy to discuss your requirements and provide you with a free quote.</p> */}
        </div>
        <div className="shadow-slate-500 mt-[30px] xl:w-[48%]  lg:w-[48%]  md:w-[100%] sm:w-[100%]  w-[100%]">
        <img 
  src="/assits/images/four.jpg" 
  alt="" 
  style={{ width: '100%', height: 'auto' }} 
/>
        </div>
      </div>
    </Container>
  )
}

export default Electricban1
