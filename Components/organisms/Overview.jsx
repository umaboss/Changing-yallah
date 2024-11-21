import React, { useEffect } from 'react';
import ServicesMoli from '../moleculus/ServicesMoli';
import AnchorTag from '../atoms/Anchortag';
import Link from 'next/link';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function Overview() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with custom settings
    }, []);

    return (
        <div>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 sm:grid-cols-1 gap-9'>
                {/* ServicesMoli components with left animation */}
                <Link href=''>
                    <div data-aos="fade-right">
                        <ServicesMoli src='/assits/images/plumber/paint.jpg' heading='Paint Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                    </div>
                </Link>

                <Link href=''>
                    <div data-aos="fade-left">
                        <ServicesMoli src='/assits/images/plumber/bath.jpg' heading='Bathroom Renovation' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                    </div>
                </Link>

                <Link href=''>
                    <div data-aos="fade-right">
                        <ServicesMoli src='/assits/images/plumber/celling.jpg' heading='Celling' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                    </div>
                </Link>

                <Link href=''>
                    <div data-aos="fade-left">
                        <ServicesMoli src='/assits/images/plumber/acclean.jpg' heading='AC Deep Cleaning' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                    </div>
                </Link>
            </div>

            <div className='flex justify-center mb-[30px] items-center'>
                <div className="hover-fill-from-bottom cursor-pointer mt-[40px] leading-[30px] flex py-[11px] justify-center items-center xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
                    {/* "Read More" link with fade animation from right */}
                    <Link href='/service' className='flex items-center leading-[30px] text-[18px] font-[600]' data-aos="fade-right">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Overview;
