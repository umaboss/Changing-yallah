import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'
import Bathimg from './bathimg'

function Bathroomimages() {
    return (
        <Container>
            <div className='gap-[20px] items-center justify-center xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                {/* <Tailimg src="/assits/images/bathroom3.jpg" />
                <Tailimg src="/assits/images/bath3.jpg" />
                <Tailimg src="/assits/images/bath4.jpg" />
                <Tailimg src="/assits/images/bath5.jpg" />
                <Tailimg src="/assits/images/bath7.jpg" />
                <Tailimg src="/assits/images/bath10.jpg" /> */}
                <Bathimg src='/assits/images/bathroom5.jpg'/>
                <Bathimg src='/assits/images/bathroom5.jpg'/>
                <Bathimg src='/assits/images/bathroom9.jpg'/>
                <Bathimg src='/assits/images/bathroom11.jpg'/>
                <Bathimg src='/assits/images/bathroom11.jpg'/>
                <Bathimg src='/assits/images/bathroom5.jpg'/>
            </div>
        </Container>
    )
}

export default Bathroomimages
