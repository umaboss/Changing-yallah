import Offer from '@/Components/moleculus/Offer'
import Acservicemain from '@/Components/organisms/Acservicemain'
import Footer from '@/Components/organisms/Footer'
import Headermain from '@/Components/organisms/Headermain'
import Offermain from '@/Components/organisms/Offermain'
import React from 'react'

function acservice() {
  return (
    <div>
        <Headermain/>
        <Acservicemain/>
        <Offermain/>
        <Footer/>
    </div>
  )
}

export default acservice