import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Glassimages() {
    return (
        <Container>
            <div className=' gap-[20px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                <Tailimg src="/assits/images/glass9.jpg" />
                <Tailimg src="/assits/images/glass8.jpg" />
                <Tailimg src="/assits/images/glass3.jpg" />
                <Tailimg src="/assits/images/glass4.jpg" />
                <Tailimg src="/assits/images/glass5.jpg" />
                <Tailimg src="/assits/images/glass6.jpg" />
            </div>
        </Container>
    )
}

export default Glassimages
