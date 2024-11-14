import React from 'react'
import Span from '../atoms/Span'
import Paragraph from '../atoms/Paragraph'

function Offer({ text, src, contant, Para }) {
    return (
        <div>
            <div>
                <div className='text-[42px] text-[#091736] font-[800]'>{contant}</div>
                <div className='text-[16px] font-[400]'>{Para}</div>
            </div>
            <div className=''>
                <div className='relative group'>
                    <div className='overflow-hidden'>
                        <img 
                            className='h-[200px] w-[100%] object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-2xl' 
                            src={src} 
                            alt="" 
                        />
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-white bg-opacity-50 p-2'>
                            <Span level='offers'>{text}</Span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer
