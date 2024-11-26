import React from 'react'
import { FaSmile, FaStar, FaUserTie, FaProjectDiagram } from 'react-icons/fa'
import Counter3 from './Counter3'
import Container from '../atoms/Container'
function Maintanceflow() {
    return (
       <Container>
         <div className='flex items-center justify-center relative'>
            <div className="z-60 absolute opacity-100 rounded-md shadow-2xl px-[40px]  xl:top-[-90px] md:top-[-30px] sm:top-[-40px] top-[-40px] bg-white gap-8 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-1 items-center justify-center">
                
                {/* Happy Customer */}
                <div className="my-[25px] py-[15px] px-[73px] text-center xl:border-b-0 lg:border-b-0 sm:border-b border-b hover:bg-[#f5f5f5] hover:text-white transition-all duration-300 ease-in-out">
                    <div className="flex justify-center items-center gap-3">
                        <FaSmile className="text-4xl text-[#3787c3] hover:text-white" />
                        <Counter3 targetCount={15} startCount={0} contant={"Happy Customers"} />
                    </div>
                </div>

                {/* Rating Customer */}
                <div className="my-[25px] py-[15px] px-[73px] text-center xl:border-b-0 lg:border-b-0 sm:border-b border-b hover:bg-[#f5f5f5] hover:text-white transition-all duration-300 ease-in-out">
                    <div className="flex justify-center items-center gap-3">
                        <FaStar className="text-4xl text-[#3787c3] hover:text-white" />
                        <Counter3 targetCount={12} startCount={0} contant={"Rating Customers"} />
                    </div>
                </div>

                {/* Pro Experts */}
                <div className="my-[25px] py-[15px] px-[73px] text-center xl:border-b-0 lg:border-b-0 sm:border-b border-b hover:bg-[#f5f5f5] hover:text-white transition-all duration-300 ease-in-out">
                    <div className="flex justify-center items-center gap-3">
                        <FaUserTie className="text-4xl text-[#3787c3] hover:text-white" />
                        <Counter3 targetCount={13} startCount={0} contant={"Pro Experts"} />
                    </div>
                </div>

                {/* Completed Projects */}
                <div className="my-[25px] py-[15px] px-[73px] text-center xl:border-b-0 lg:border-b-0 sm:border-b border-b hover:bg-[#f5f5f5] hover:text-white transition-all duration-300 ease-in-out">
                    <div className="flex justify-center items-center gap-3">
                        <FaProjectDiagram className="text-4xl text-[#3787c3] hover:text-white" />
                        <Counter3 targetCount={12} startCount={0} contant={"Completed Projects"} />
                    </div>
                </div>

            </div>
        </div>
       </Container>
    )
}

export default Maintanceflow
