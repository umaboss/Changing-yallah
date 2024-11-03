import React from 'react'
import Header from '../moleculus/Header'
import Logo from '../atoms/Logo'
import '../../app/globals.css'
import Container from '../atoms/Container'
import Link from 'next/link'


function Headermain() {
    return (
       <div className=''>
         <div data-aos="fade-down overflow-x-hidden " >
           <Container>
           <div className='flex justify-between text-center items-center pt-[10px]'>
               <Logo src='/asitd/images/logo.png' />
            <Header />
            </div>
           </Container>                             
        </div>
       </div>
    )
}

export default Headermain