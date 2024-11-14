import Link from 'next/link'
import React from 'react'

function Tempature() {
    return (
        <div className=''>
            <div className="temp-bg  ">
                <div className=" pt-[8%] gap-[30px] flex flex-col items-center justify-center text-center">
                    <h1 className='text-[32px] px-[20px] text-white tracking-[-2px] leading-[1.1em] font-[400] sm:font-[200] sm:text-[32px]'>Professional AC maintenance</h1>
                    <p className="text-white text-[13px] px-[20px] text-[center]">
                        We are professionals to keep your home cool                    </p>
                    <div className="hover-fill-from-bottom bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
                        <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
                            Contact Us
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tempature