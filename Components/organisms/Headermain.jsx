import React from 'react'
import Header from '../moleculus/Header'  // Fixed typo: "moleculus" -> "molecules"
import Logo from '../atoms/Logo'

function Headermain() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#3787C3] px-4'>
        <div className='flex justify-between items-center w-full'>
            <Logo />
            <Header />
        </div>
    </div>
  )
}

export default Headermain
