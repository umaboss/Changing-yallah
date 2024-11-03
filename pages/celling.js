import Cellingmain from '@/Components/organisms/Cellingmain'
import Footer from '@/Components/organisms/Footer'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'

function celling() {
  return (
    <div className='overflow-hidden'>
        <Headermain/>
        <Cellingmain/>
        <Footer/>
    </div>
  )
}

export default celling