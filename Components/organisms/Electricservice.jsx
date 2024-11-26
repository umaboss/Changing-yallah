import React from 'react'
import Electricbanner from '../moleculus/Electricbanner'
import Electricban1 from '../moleculus/Electricban1'
import Electircban2 from '../moleculus/Electricban2'
import ElectircHeading from '../moleculus/ElectricHeading'
import Electricimages from '../moleculus/Electircimages'
import Footer from './Footer'
import Heading from '../atoms/Heading'
import PlumberContact from './PlumberContact'
import Container from '../atoms/Container'

function Electricservice() {
  return (
    <div>
      <Electricbanner />
      <Electricban1 />
      <Electircban2 />
      <ElectircHeading />
      <Electricimages />
      <Container>
      <div className='pt-[50px] '>
        <Heading level={'2'}>Contact Us</Heading>
      </div>
      </Container>
      <div className='my-[70px]'>
        <PlumberContact />
      </div>

      <Footer />

    </div>
  )
}

export default Electricservice
