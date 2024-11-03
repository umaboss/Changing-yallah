import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

function ServicesMoli({ headeing, para, src }) {
  return (
    <div className='  gap-[20px] border hover:shadow-lg py-[30px] px-[30px] xl:flex xl:flex-row xl:items-center xl:justify-center xl:text-start lg:flex lg:flex-cols lg:items-center lg:justify-center lg:text-center md:flex md:flex-col md:items-center md:justify-center md:text-center sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center flex flex-col items-center justify-center mx-[50px] text-center'>
      <img src={src} alt="" width={100} height={80} />
      <div className=''>
        <Heading level='8'>{headeing}</Heading>
        <Paragraph variant='homepara'>{para}</Paragraph>
      </div>

    </div>
  )
}

export default ServicesMoli