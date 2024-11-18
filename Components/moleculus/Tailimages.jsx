import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Tailimages() {
  return (
    <Container>
      <div className="gap-8 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 items-center justify-center">
        <Tailimg src="/assits/Tiles Fixing/tile3.jpg"/>
        <Tailimg src="/assits/Tiles Fixing/tile4.jpg"/>
        <Tailimg src="/assits/Tiles Fixing/tilebanner.jpg"/>
        <Tailimg src="/assits/images/Tail5.webp"/>
        <Tailimg src="/assits/images/Tail7.webp"/>
        <Tailimg src="/assits/images/Tail8.webp"/>
      </div>
    </Container>
  )
}

export default Tailimages
