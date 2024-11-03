import Heading from '@/Components/atoms/Heading'
import PlumberContact from '@/Components/organisms/PlumberContact'
import ServicesAll from '@/Components/organisms/ServicesAll'
import Footer from '@/Components/organisms/Footer'
import React from 'react'

function Services() {
  return (
    <div>
      <ServicesAll />
      <div className='p-[50px]'>
        <Heading level={'2'}>Contact Us</Heading>
      </div>
      <PlumberContact />
      <Footer />
    </div>
  )
}

export default Services

