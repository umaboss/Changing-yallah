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
                    <div className="  ">
                        <Link href='' className='flex items-center  text-white text-[16px]  font-[600] '>
                        <button className='bg-[#3787c3]  capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in  rounded-md mt-[25px]  py-[15px] px-[50px]'>Contact</button>

                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tempature