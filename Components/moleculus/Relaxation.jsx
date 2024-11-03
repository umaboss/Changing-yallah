import Container from '../atoms/Container'
import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Heading from '../atoms/Heading'
import { LuCrown } from "react-icons/lu";
import { TfiMedall } from "react-icons/tfi";
import { LiaUserCheckSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";

function Relaxation() {
    return (
        <div>

            <Container>
                <div className='gap-[50px] pt-[20%] pb-[10%] xl:flex xl:flex-nowrap xl:mt-0 lg:flex lg:flex-nowrap lg:mt-[250px] md:flex md:flex-wrap md:mt-[250px] sm:flex sm:flex-wrap sm:mt-[700px] flex flex-wrap mt-[700px]'>
                    <div className=' grid  gap-[10px] xl:w-[35%] lg:w-[35%] md:w-[100%] sm:w-[100%] w-[100%]'>
                        <Paragraph variant='tempara'>Why choose us</Paragraph>
                        <Heading level='7' className="text-3xl">Relaxation and <br /> your satisfaction.</Heading>
                        <p className='text-[16px]'>
                        Use our services to keep your home cool .
                        Cool and clean home makes you to feel relax and better satisfaction in your life                            </p>
                    </div>
                    <div className='flex '>
                        <div className=' gap-[15px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                            <div className=' shadow-lg bg-[#3787c3] flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]' >
                                <div className='text-[42px] text-[#091736]'>
                                    <LuCrown />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#ffffff] font-[700] leading-[1em] py-[5px]'>
                                        Exceed your expectations

                                    </div>
                                    <Paragraph variant='Relaxpara'> We surpass your expectations with superior quality and exceptional craftsmanship.
                                    </Paragraph>
                                </div>
                            </div>
                            <div className='bg-[#ffffff]  shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]'>
                                <div className='text-[42px] text-[#3787c3]'>
                                    <TfiMedall />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#091736] font-[700] leading-[1em] py-[5px]'>
                                        Deliver 100% satisfaction
                                    </div>
                                    <Paragraph variant='temperature'>We deliver 100% satisfaction through exceptional quality and dedicated service.</Paragraph>
                                </div>
                            </div>
                            <div className='bg-[#ffffff] shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]'>
                                <div className='text-[42px] text-[#3787c3]'>
                                    <LiaUserCheckSolid />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#091736] font-[700] leading-[1em] py-[5px]'>
                                        Professional Expert
                                    </div>
                                    <Paragraph variant='temperature'>Skilled professionals provide expert solutions with precision, knowledge, and reliability.</Paragraph>
                                </div>
                            </div>
                            <div className='bg-[#ffffff]  shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]'>
                                <div className='text-[42px] text-[#3787c3]'>
                                    <MdSupportAgent />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#091736] font-[700] leading-[1em] py-[5px]'>

                                        Premium support 24/7
                                    </div>
                                    <Paragraph variant='temperature'>We offer premium support 24/7 for uninterrupted, top-quality assistance.</Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Relaxation