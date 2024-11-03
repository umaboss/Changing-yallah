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
                    <p className="text-[#091736 ] w-full ">
                    Special opportunity to keep your home cool with our <br /> professional services on  <b>50% off</b>                     </p>
                    {/* <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md  mt-[25px]  py-[15px] items-center flex justify-center xl:w-[35%] lg:w-[35%] md:w-[40%] sm:w-[60%] w-[80%] ">
                        <button className='flex items-center  text-white text-[16px]  font-[600] '>Claim promo !</button>
                        <Link href='/contactus' className='flex items-center  text-white text-[16px]  font-[600] '>
                        Contact Us
                        </Link>
                    </div> */}

                   <div className='xl:w-[35%] lg:w-[35%] md:w-[40%] sm:w-[60%] flex justify-center'>
                   <Link href='/contactus' className='flex items-center text-white text-[15px]  font-[600] '>   
                            <button className=' bg-[#3787c3] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in w-[200px]  rounded-md h-[50px] flex justify-center items-center text-center '   >
                            Contact Us  
                            </button></Link>
                   </div>
                </div>

            </div>
            <Maintanceflow />
        </div>
    );
}

export default MaintainceService;
