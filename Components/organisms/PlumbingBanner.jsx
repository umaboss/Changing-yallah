import React from 'react';
import "../../app/globals.css";
import Link from 'next/link';
const PlumbingBanner = () => {
    return (
        <div 
            data-aos="zoom-in" 
            className="plumber-banner temp-bg w-full h-[514px] flex items-center justify-center relative"
        >
            {/* Dark overlay to enhance contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content container */}
            <div className="relative z-10 flex pt-[100px] flex-col items-center text-center px-6 text-white space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold capitalize leading-tight max-w-2xl tracking-wide drop-shadow-lg">
                    We Fix All Your Plumbing Problems
                </h1>
                
                <p className="text-lg md:text-xl max-w-lg text-gray-200 leading-relaxed drop-shadow-md">
                    Use and re-use tons of responsive sections to create the perfect layout. Sections are firmly organized into the perfect starting categories for ease of use.
                </p>

                <Link href="/contactus" className="hover-fill-from-bottom bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[25%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us 
            </Link>
          </Link>
            </div>
        </div>
    );
}

export default PlumbingBanner;
