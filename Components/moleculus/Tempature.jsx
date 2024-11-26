import Link from 'next/link';
import React from 'react';

function Tempature() {
    return (
        <div className="temp-bg pt-[50px]">
            <div className="content flex flex-col justify-center items-center">
                <h1>Professional AC Maintenance</h1>
                <p>We are professionals to keep your home cool</p>
                <Link href="/contactus" className="hover-fill-from-bottom cursor-pointer bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us
            </Link>
          </Link>
            </div>
        </div>
    );
}

export default Tempature;
