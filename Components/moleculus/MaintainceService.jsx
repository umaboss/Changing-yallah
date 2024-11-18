import React from 'react';
import Maintanceflow from './Maintanceflow';
import Link from 'next/link';

function MaintainceService() {
    return (
        <div className=''>
            <div className="maintances-bg  ">
                <div className="z-50 flex flex-col items-center justify-center gap-[30px] content-container">
                    <h1 className='text-[42px] text-[#091736] tracking-[-2px] leading-[1.1em] font-[800] xl:w-[70%]  lg:w-[70%]  md:w-[100%] sm:w-[100%]  w-[100%] '>
                        Discount up to 50% for  maintenance service. Only this month!
                        </h1>
                    <p className="text-white     w-full ">
                    Special opportunity to keep your home cool with our <br /> professional services on  <b>50% off</b>                     </p>
                    {/* <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md  mt-[25px]  py-[15px] items-center flex justify-center xl:w-[35%] lg:w-[35%] md:w-[40%] sm:w-[60%] w-[80%] ">
                        <button className='flex items-center  text-white text-[16px]  font-[600] '>Claim promo !</button>
                        <Link href='/contactus' className='flex items-center  text-white text-[16px]  font-[600] '>
                        Contact Us
                        </Link>
                    </div> */}

                   <div className="hover-fill-from-bottom leading-[30px] bg-white py-[11px] flex justify-center items-center xl:w-[30%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us 
            </Link>
          </div>
                </div>

            </div>
            <Maintanceflow />
        </div>
    );
}

export default MaintainceService;
