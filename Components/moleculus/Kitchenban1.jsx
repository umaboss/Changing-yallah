import React from 'react';
import Container from '../atoms/Container';
import Image from 'next/image';

function Kitchenban1() {
    return (
        <Container>
            <div className='xl:my-16 lg:my-16 md:my-16 sm:my-12 my-12 xl:flex xl:flex-nowrap xl:items-center xl:justify-between lg:flex lg:flex-nowrap lg:items-center lg:justify-between md:flex md:flex-wrap md:items-center md:justify-center sm:flex sm:flex-wrap sm:items-center sm:justify-center flex flex-wrap items-center justify-center bg-[#1357A6] p-[30px] rounded-lg'>
                
                {/* Left Side - Text Section */}
                <div className='flex flex-col gap-[20px] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]'>
                    <h1 className='xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold leading-[41px] text-white'>
                        Get Reliable & Affordable Tile Fix Dubai Services From Us!
                    </h1>
                    <p className='xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-400 leading-[35px] text-white'>
                        In Dubai, Hajardubai.ae provides professional and affordable tile installation and repair services.
                        Our team of experienced and qualified tile fixers gets the job done quickly and efficiently.
                    </p>
                    <p className="xl:text-lg lg:text-lg md:text-lg sm:text-md text-md font-400 leading-[35px] text-white">
                        If you need tile installation or repair services in Dubai, please contact us today. We would be happy to discuss your requirements and provide a free quote.
                    </p>
                </div>

                {/* Right Side - Image Section */}
                <div className="mt-[30px] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]">
                    <Image
                        src="/assits/images/kitchen1.jpg"
                        alt="Kitchen Tile Fixing"
                        width={800}
                        height={600}
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </Container>
    );
}

export default Kitchenban1;
