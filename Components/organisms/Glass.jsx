import React from 'react'
import Glassbanner from '../moleculus/Glassbanner'
import Glassban1 from '../moleculus/Glassban1'
import Glassban2 from '../moleculus/Glassban2'
import GlassHeading from '../moleculus/GlassHeading'
import Glassimages from '../moleculus/Glassimages'
import Footer from './Footer'
import Headermain from './Headermain'
import PlumberContact from './PlumberContact'
import Heading from '../atoms/Heading'

function Glass() {
    return (
        <div>
            <Headermain />
            <Glassbanner />
            <Glassban1 />
            <Glassban2 />
            <GlassHeading />
            <Glassimages />
            <div className='p-[50px]'>
                <Heading level={'2'}>Contact Us</Heading>
            </div>
            <div className='my-[70px]'>
                <PlumberContact />
            </div>
            <Footer />

        </div>
    )
}

export default Glass
