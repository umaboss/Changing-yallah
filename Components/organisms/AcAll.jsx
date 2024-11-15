import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Acbanner from '../moleculus/Acbanner'

function AcAll() {
  return (
    <div>

      <div className='xl:mt-0 lg:mt-0 md:mt-[30px] sm:mt-[30px] mt-[30px]'>
      <Acbanner 
    content={'AC Services'}
    paragraph={`It provides ac repair services in the range of split air conditioner, <br /> window air conditioner,  central air conditioners, and other <br /> power cooling systems.`}
/>

      </div>

    </div>
  )
}

export default AcAll