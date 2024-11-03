import Contact from '@/Components/organisms/Contact'
import Footer from '@/Components/organisms/Footer'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Heading from '@/Components/atoms/Heading'
import "../app/globals.css"


function contactus() {
    return (
        <div >
            <Headermain />
            <div className='contact text-center'>
                <Heading level={'2'}>Contact Us</Heading>
            </div>

            <div className='mt-[80px]'>
                <Contact />

                <Footer />
            </div>

        </div>
    )
}

export default contactus