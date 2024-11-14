import React from 'react'

function ServicesMoli({ headeing, para, src }) {
  return (
    <div className='gap-[20px] border hover:shadow-lg py-[30px] px-[30px] xl:flex xl:flex-row xl:items-center xl:justify-center xl:text-start lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center md:flex md:flex-col md:items-center md:justify-center md:text-center sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center flex flex-col items-center justify-center mx-[50px] text-center transition duration-500 ease-in-out hover:bg-[#3787c3] hover:text-white'>
      <img src={src} alt={headeing} width={100} height={80} className="mb-4" />
      <div>
        {/* Heading with reduced font size */}
        <h2 className="text-[24px] font-bold leading-[32px] transition  ease-in">{headeing}</h2>
        {/* Paragraph with hover effect to turn text white */}
        <p className="text-[16px]  leading-[30px] transition ease-in ">{para}</p>
      </div>
    </div>
  )
}

export default ServicesMoli
