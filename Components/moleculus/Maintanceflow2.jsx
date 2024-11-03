import React from 'react'
import Span from '../atoms/Span'
import Paragraph from '../atoms/Paragraph'
import Counter3 from './Counter3'
import Container from '../atoms/Container'


function Maintanceflow2() {
    return (
        <Container>
            <div className='my-[100px]'>
                <div className="z-50  opacity-100 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 overflow-hidden py-[50px]  rounded-md shadow-2xl  px-[40px]  mx-auto  bg-white">
                    <div className="  py-[15px] text-center ">
                        <Counter3 targetCount={300} startCount={0} contant={"Happy Customer"} />
                    </div>
                    <div className="border-l  py-[15px]  text-center ">
                        <Counter3 targetCount={300} startCount={0} contant={"Rating Customer"} />
                    </div>
                    <div className="border-l  py-[15px]  text-center ">
                        <Counter3 targetCount={300} startCount={0} contant={"Pro Experts"} />
                    </div>
                    <div className="border-l  py-[15px]  text-center ">
                        <Counter3 targetCount={300} startCount={0} contant={"COMPLETE PROJECTS"} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Maintanceflow2