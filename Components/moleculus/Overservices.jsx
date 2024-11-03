import React from 'react'
import Container from '../atoms/Container'
import AnchorTag from '../atoms/Anchortag'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

function OverServices() {
    return (
        <Container>
                <div className='text-center pt-[2%]'>
                    <Heading level='2'> Services</Heading>
                </div>
            <div className=' pt-[3%]'>
                <div className='flex gap-[20px]'>
                    <div className=''>
                        <AnchorTag variant='img'><img className='h-[300px]' src="/assits/images/ac-maintenance.jpg" alt="" /></AnchorTag>
                        <div className='bg-[#164b8d]  py-[10px]   bottom-[20px]  text-center '>
                        <AnchorTag variant='services'>AC SERVISES</AnchorTag>
                        </div>
                    </div>
                    <div >
                        <AnchorTag variant='imgs'><img className='h-[300px] w-[400px]' src="/assits/images/handyman.jpeg" alt="" /></AnchorTag>
                       <div className='bg-[#164b8d]  py-[10px]   bottom-[20px]  text-center'>
                        <AnchorTag variant='services'>AC SERVISES</AnchorTag>
                       </div>
                    </div>
                    <div >
                        <AnchorTag variant='imgs'><img className='h-[300px]' src="/assits/images/electrician-2.jpg" alt="" /></AnchorTag>
                        <div className='bg-[#164b8d]  py-[10px]   bottom-[20px]  text-center'>
                        <AnchorTag variant='services'>AC SERVISES</AnchorTag>
                        </div>
                    </div>
                    <div >
                        <AnchorTag variant='imgs'><img className='h-[300px]' src="/assits/images/painting-1.jpg" alt="" /></AnchorTag>
                       <div className='bg-[#164b8d]  py-[10px]   bottom-[20px]  text-center'>
                       <AnchorTag variant='services'>AC SERVISES</AnchorTag>
                       </div>
                    </div>

                    

                </div>
            </div>
        </Container>
    )
}

export default OverServices