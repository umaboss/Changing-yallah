import React from 'react'
import Span from '../atoms/Span'
import Paragraph from '../atoms/Paragraph'
import Counter3 from './Counter3'


function Maintanceflow() {
    return (
        <div className=' flex items-center justify-center relative '>
            <div className="z-50 absolute opacity-100 rounded-md shadow-2xl  px-[40px] w-[90%] xl:top-[-90px] md:top-[-30px] sm:top-[-40px] top-[-40px] bg-white gap-8 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-1 items-center justify-center">
                <div className="my-[25px] py-[15px] px-[73px] text-center xl:border-b-0 lg:border-b-0 sm:border-b border-b ">
                    <Counter3 targetCount={15} startCount={0} contant={"Happy Customer"} />
                </div>
                <div className="xl:border-l xl:border-b-0 lg:border-l lg:border-b-0 md:border-b sm:border-b border-b my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={60} startCount={0} contant={"Rating Customer"} />
                </div>
                <div className="xl:border-l xl:border-b-0 lg:border-l lg:border-b-0 md:border-b sm:border-b border-b my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={51} startCount={0} contant={"Pro Experts"} />
                </div>
                <div className="xl:border-l xl:border-b-0 lg:border-l lg:border-b-0 md:border-b my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={20} startCount={0} contant={"COMPLETE PROJECTS"} />
                </div>
            </div>
        </div>
    )
}

export default Maintanceflow