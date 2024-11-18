import React from 'react'
import Headermain from './Headermain'
import Bathroombanner from '../moleculus/Bathroombanner'
import Bathroomban1 from '../moleculus/Bathroomban1'
import Bathroomban2 from '../moleculus/Bathroomban2'
import BathroomHeading from '../moleculus/BathroomHeading'
import Bathroomimages from '../moleculus/Bathroomimages'
import Footer from './Footer'
import Heading from '../atoms/Heading'
import PlumberContact from './PlumberContact'
import Container from '../atoms/Container'

function Bathroom() {
    return (
        <div>
            <Headermain />
            <Bathroombanner />
            <Bathroomban1 />
            {/* <Bathroomban2 /> */}
            <BathroomHeading />
            <Bathroomimages />
            <Container>
            <div className='pt-[50px]'>
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

export default Bathroom
