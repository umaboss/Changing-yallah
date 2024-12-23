import React from 'react'
import ServicePro from '../moleculus/ServicePro'
import Container from '../atoms/Container'

const PlumbingOffer = () => {
    return (
      <div className='flex mt-[40px] flex-col gap-[20px]  py-[60px] bg-gray-100  items-center  ' >
            <Container>
            <h2 data-aos="fade-up" className=' text-[35px] pb-[20px] font-medium capitalize text-gray-900 text-center ' >services we are offering </h2>
            <div className=" w-[100%] flex justify-between ">
                <ServicePro type="zoom-in-right" src='/assits/Plumbing Services/s1.jpg' title='Faucet & Leak Repairs' disc="In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good whatever device." />
                <ServicePro type="zoom-in" src='/assits/Plumbing Services/s3.jpg' title='Remodeling Service' disc="In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good whatever device." />
                <ServicePro type="zoom-in-left" src='/assits/Plumbing Services/s2.jpg' title='Drain Cleaning & Repairs' disc="n the new era of technology we look in the future with certainty and pride, that's why our theme looks so good whatever device." />
            </div>
      </Container>
        </div>
    )
}

export default PlumbingOffer