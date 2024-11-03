import React from 'react'
import Heading from '../atoms/Heading'
import Container from '../atoms/Container'
import  "../../app/globals.css"
function Work() {
  return (
    <div>
        <Container>
            <div className='grid gap-[25px] mb-[90px]'>
                <div className='text-center grid gap-[25px]'>
                    <Heading level='7'>Who we work with</Heading>
                    <Heading level='3'>Some of the Brands we carry</Heading>
                </div>
                <div className='flex gap-[38px] scrollbar '>
                    <img src="/assits/images/Work-logo.png" alt="" />
                    <img src="/assits/images/work-logo-2.png" alt="" />
                    <img src="/assits/images/work-logo-3.png" alt="" />
                    <img src="/assits/images/work-logo-4.png" alt="" />
                    <img src="/assits/images/work-logo-5.png" alt="" />
                    <img src="/assits/images/work-logo-11.png" alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Work