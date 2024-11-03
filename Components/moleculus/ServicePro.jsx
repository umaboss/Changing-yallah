import React from 'react'

const ServicePro = ({ type , title , disc , src }) => {
  return (
    <div data-aos={type} className='w-[30%] hover:shadow-lg duration-[0.3s] ease-in-out py-[15px] px-[15px] rounded-[10px] flex flex-col gap-[10px] ' >
        <img src={src} className='rounded-[10px]' alt="inmages" />
        <h3 className=' text-[17px] font-semibold capitalize ' >{title}</h3>
        <p className=' text-gray-600 text-[12px] capitalize ' >{disc}</p>
    </div>
  )
}

export default ServicePro