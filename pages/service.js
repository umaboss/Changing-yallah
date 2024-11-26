import Heading from '@/Components/atoms/Heading'
import PlumberContact from '@/Components/organisms/PlumberContact'
import ServicesAll from '@/Components/organisms/ServicesAll'
import Footer from '@/Components/organisms/Footer'
import React from 'react'
import Container from '@/Components/atoms/Container'

function Services() {
  return (
    <div>
      <ServicesAll />
      <Container>
      <div className='p-[50px]'>
        <Heading level={'2'}>Contact Us</Heading>
      </div>
      <div className='pb-[50px]'>
      <PlumberContact />
      </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Services

