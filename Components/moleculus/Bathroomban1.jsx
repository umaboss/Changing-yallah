import React from 'react'
import Container from '../atoms/Container'
import Image from 'next/image'

function Bathroomban1() {
    return (
        <Container>
            <div className='xl:my-16 lg:my-16 md:my-16 sm:my-12 my-12 bg-[#164B8D] px-[50px] pt-[10px] pb-[20px]  xl:flex xl:flex-nowrap xl:items-center xl:justify-between lg:flex lg:flex-nowrap lg:items-center lg:justify-between md:flex md:flex-wrap md:items-center md:justify-center sm:flex sm:flex-wrap sm:items-center sm:justify-center flex flex-wrap items-center justify-center'>
                <div className='flex flex-col gap-[30px] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]'>
                    <h1 className='xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold leading-[44px] dark:text-white transition-all duration-300 text-white'>
                        Get Reliable & Affordable Tile Fix Dubai Services From Us!
                    </h1>
                    <p className='xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-normal leading-[30px] text-white'>
                        In Dubai, Hajardubai.ae provides professional and affordable tile installation and repair services. Our team of experienced and qualified tile fixers can complete the job quickly and efficiently, ensuring quality results with top-notch materials and equipment.
                    </p>
                    <p className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-normal leading-[30px] text-white">
                        Need tile installation or repair in Dubai? Contact us today for a free consultation and quote. We’re here to help you transform your space!
                    </p>
                </div>
                <div className="relative mt-[30px] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]">
                    {/* Image with button on top */}
                    <div className='relative'>
                        <Image
                            src="/assits/Bathroom/aboutb.jpg"
                            alt="Tile Fixing"
                            width={800}
                            height={600}
                            className='object-cover w-full h-[500px] rounded-lg transition-all duration-300 transform hover:scale-105'
                        />
                        {/* Button on top of image */}
                       
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Bathroomban1;
