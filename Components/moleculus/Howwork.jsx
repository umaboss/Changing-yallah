'use client'
import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Span from '../atoms/Span'

function Howwork() {
    return (
        <Container>
            <div className='text-center pt-[5%]'>
                <Heading level='2'>How We Work</Heading>
                <Paragraph variant='offer'>We are a leading AC Repairing services in UAE. We provide the best service for your home and office appliance at an affordable price. With years of experience, we can handle any repair job large or small.</Paragraph>
            </div>
            <div className='pt-[4%]'>
                <div className=' gap-[50px] xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                    <div className='border-b-2 border-l-0 xl:border-l-0 xl:border-b-0 lg:border-l-0 lg:border-b-0 md:border-l-0 md:border-b-2 sm:border-l-0 sm:border-b-2'>
                        <Span level='work'>01.</Span>
                        <Span level='work2'>Communicate</Span>
                    </div>
                    <div className=' px-[2%] xl:border-l-2 xl:border-b-0 lg:border-l-2 lg:border-b-0 md:border-l-0 md:border-b-2 sm:border-l-0 sm:border-b-2 sm:border-l-0 border-b-2 border-l-0 '>
                        <Span level='work'>02.</Span>
                        <Span level='work2'>Plans & Calculations</Span>
                    </div>
                    <div className=' px-[2%] xl:border-l-2 xl:border-b-0 lg:border-l-2 lg:border-b-0 md:border-l-0 md:border-b-2 sm:border-l-0 sm:border-b-2 sm:border-l-0 border-b-2 border-l-0  '>
                        <Span level='work'>03.</Span>
                        <Span level='work2'>Executions</Span>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Howwork