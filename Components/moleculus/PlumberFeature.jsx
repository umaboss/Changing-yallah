import React from 'react'
import { FaCheck } from "react-icons/fa6";

const PlumberFeature = ( {text} ) => {
    return (
        <div className='flex items-center gap-[10px] ' >
            <FaCheck className='text-[#3787c3]' />
            <p className='text-[14px] capitalize text-gray-800 ' > {text} </p>
        </div>
    )
}

export default PlumberFeature