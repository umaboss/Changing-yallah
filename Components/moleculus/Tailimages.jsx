import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Tailimages() {
  return (
  <Container>
      <div className=' gap-[20px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1'>
      <Tailimg src="/assits/images/Tail3.webp"/>
      <Tailimg src="/assits/images/Tail4.webp"/>
      <Tailimg src="/assits/images/Tail5.webp"/>
      <Tailimg src="/assits/images/Tail6.webp"/>
      <Tailimg src="/assits/images/Tail7.webp"/>
      <Tailimg src="/assits/images/Tail8.webp"/>
    </div>
  </Container>
  )
}

export default Tailimages
