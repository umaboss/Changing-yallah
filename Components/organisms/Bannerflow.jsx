import React from 'react'
import { FaFan ,FaTools } from "react-icons/fa";
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import { FaGears } from "react-icons/fa6";


function bannerflow() {
  return (
    <div className=' flex rounded-md shadow-2xl w-[90%] mt-[-90px] ml-[70px] bg-white'>
        <div className="p-4 flex">
            <div className=" bg-[#f35748] text-[24px] rounded-md text-white h-[25px] w-[0px] pt-[25px] pb-[45px] pl-[25px] pr-[45px]    ">
            <FaFan />
            </div>
            <div className="p-3 ">
                <Heading level="4">AC Installation</Heading>
                <Paragraph variant='imgs'>Purchasing a new air conditioner is no small  decision. Find out if you need a repair, a  replacement, or a brand new installation.</Paragraph>
            </div>
        </div>
        <div className="p-4 flex">
            <div className=" bg-[#f35748] text-[24px] rounded-md text-white h-[25px] w-[0px] pt-[25px] pb-[45px] pl-[25px] pr-[45px]  ">
            <FaTools />
            </div>
            <div className="p-3 ">
                <Heading level="4">AC Repair</Heading>
                <Paragraph variant='imgs'>Are you a homeowner in need of air  conditioning repair services? We know the  struggle. Find out more!</Paragraph>
            </div>
        </div>
        <div className="p-4 flex">
            <div className=" bg-[#f35748] text-[24px] rounded-md text-white h-[25px] w-[0px] pt-[25px] pb-[45px] pl-[25px] pr-[45px]  ">
            <FaGears />
            </div>
            <div className="p-3 ">
                <Heading level="4">AC Maintenance</Heading>
                <Paragraph variant='imgs'>we are your one-stop provider for all the  maintenance of your heating and air  conditioner.</Paragraph>
            </div>
        </div>
    </div>
  )
}

export default bannerflow