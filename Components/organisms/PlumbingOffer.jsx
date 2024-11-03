import React from 'react'
import ServicePro from '../moleculus/ServicePro'

const PlumbingOffer = () => {
    return (
        <div className='flex mt-[40px] flex-col gap-[20px] px-[8%] py-[100px] bg-gray-100  items-center  ' >
            <h2 data-aos="fade-up" className=' text-[35px] font-medium capitalize text-gray-900 text-center ' >services we are offering </h2>
            <div className=" w-[100%] flex justify-between ">
                <ServicePro type="zoom-in-right" src='/assits/images/1.png' title='Faucet & Leak Repairs' disc="In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good whatever device." />
                <ServicePro type="zoom-in" src='/assits/images/3.png' title='Remodeling Service' disc="In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good whatever device." />
                <ServicePro type="zoom-in-left" src='/assits/images/2.png' title='Drain Cleaning & Repairs' disc="n the new era of technology we look in the future with certainty and pride, that's why our theme looks so good whatever device." />
            </div>
        </div>
    )
}

export default PlumbingOffer