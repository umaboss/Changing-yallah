import React from 'react'
import Offermain from '../organisms/Offermain'
import Offer from './Offer'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import "../../app/globals.css"

function cellingimg() {
  return (
    <div className='bg-[#f3f5f9] py-[40px]'>
      <Container>
        <div>
          <div className='  text-center '>
            <Heading level='2'>What We Offer</Heading>
            <Paragraph variant='offer'>We offer the best ac repair services in UAE for any type of ac problems you might be facing, we also provide best cooling solutions and service for your home and office. We are a team of experts with many years of experience in the field that will surely help you out. You can also call us if you have any other queries regarding air conditioners or air conditioner repairing services that we provide</Paragraph>
          </div >
          <div className='no-scrollbar gap-[20px] h-[550px] pt-[2%] items-center justify-center  xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
            <Offer src={'assits/images/cel9.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel2.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel3.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel4.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel5.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel6.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel7.jpg'} text={'CELLING'} />
            <Offer src={'assits/images/cel8.jpg'} text={'CELLING'} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default cellingimg