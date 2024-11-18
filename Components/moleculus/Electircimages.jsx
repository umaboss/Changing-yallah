import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Electricimages() {
  return (
    <Container>
      <div className=' gap-[20px] items-center justify-center xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
        <Tailimg src="/assits/Electrical Services/e4.jpg" className='' />
        <Tailimg src="/assits/images/ele2.jpg" />
        <Tailimg src="/assits/images/ele7.jpg" />
        <Tailimg src="/assits/images/ele13.jpg" />
        <Tailimg src="/assits/images/ele9.jpg" />
        <Tailimg src="/assits/images/ele8.jpg"  />
      </div>
    </Container>
  )
}

export default Electricimages
