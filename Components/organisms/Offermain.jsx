import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Offer from '../moleculus/Offer'
import Howwork from '../moleculus/Howwork'
import Clints from '../moleculus/Clints'
import Getintouch from '../moleculus/Getintouch'

function Offermain() {
  return (
 <div>
     <div  className='bg-[#f3f5f9] py-[40px]  '>
        <Container>
            <div className='text-center pt-[5%]'>
                <Heading level='2'>What We Offer</Heading>
                <Paragraph variant='offer'>We offer the best ac repair services in UAE for any type of ac problems you might be facing, we also provide best cooling solutions and service for your home and office. We are a team of experts with many years of experience in the field that will surely help you out. You can also call us if you have any other queries regarding air conditioners or air conditioner repairing services that we provide</Paragraph>
            </div>
            <div className=' pt-[2%] gap-[20px] grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 '>
            <Offer text={'AC Cleaning'} src={'/assits/Downloads/AC Services/ac1.jpg'} />
            <Offer text={'AC Duct Cleaning'} src={"assits/Downloads/AC Services/ac2.jpg"} />
            <Offer text={"AC Installation"} src={'assits/Downloads/AC Services/ac3.jpg'} />
            <Offer text={"AC Maintenance"} src={'assits/Downloads/AC Services/ac4.jpg'} />
            </div>
        </Container>
    </div>
    <Howwork/>
    <Clints/>
    <Getintouch/>
 </div>
  )
}

export default Offermain