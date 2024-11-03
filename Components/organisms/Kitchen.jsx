import React from 'react'
import Kitchenbanner from '../moleculus/Kitchenbanner'
import Headermain from './Headermain'
import Footer from './Footer'
import Kitchenban1 from '../moleculus/Kitchenban1'
import Kitchenban2 from '../moleculus/Kitchenban2'
import KitchenHeading from '../moleculus/KitchenHeading'
import Kitchenimages from '../moleculus/Kitchenimages'
import PlumberContact from './PlumberContact'
import Heading from '../atoms/Heading'




function Kitchen() {
    return (
        <div>
            <Headermain />
            <Kitchenbanner />
            <Kitchenban1 />
            <Kitchenban2 />
            <KitchenHeading />
            <Kitchenimages />
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

export default Kitchen
