import React from 'react'
import Container from '../atoms/Container'

function Glassban1() {
    return (
        <Container>
            <div className='my-[60px] xl:flex xl:flex-nowrap xl:items-center xl:justify-between lg:flex lg:flex-nowrap lg:items-center lg:justify-between md:flex md:flex-wrap md:items-center md:justify-center sm:flex sm:flex-wrap sm:items-center sm:justify-center flex flex-wrap items-center justify-center bg-[#1357A6] p-[20px] rounded-lg'>
                {/* Left Section: Text */}
                <div className='flex flex-col gap-[20px] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]'>
                    <h1 className='text-[34px] font-semibold leading-[41px] text-white'>
                        Get Reliable & Affordable Glass Fix Dubai Services From Us!
                    </h1>
                    <p className='text-[18px] font-normal leading-[35px] text-white'>
                        At Hajardubai.ae, we provide professional and affordable glass installation and repair services. Our team of experienced and qualified specialists ensures that the job is done quickly and efficiently using high-quality materials and equipment.
                    </p>
                    <p className='text-[17px] font-normal leading-[35px] text-white'>
                        If you're looking for expert glass installation or repair services in Dubai, contact us today. We're happy to discuss your requirements and provide a free quote.
                    </p>
                </div>
                {/* Right Section: Image */}
                <div className="mt-[30px] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%]">
                    <img 
                        src="/assits/images/glass2.jpg" 
                        alt="Glass Repair and Installation Services" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </Container>
    )
}

export default Glassban1;
