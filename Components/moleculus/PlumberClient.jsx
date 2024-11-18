import React from 'react'
import { IoIosStar } from "react-icons/io";

const PlumberClient = ( { src , name , msg } ) => {
    return (
            <div className=' flex bg-[#1357A6] rounded-[10px] hover:shadow-xl   justify-center items-center  py-[70px] mb-[50px] flex-col gap-[15px] items-center  ' >
                <div className="imge w-[10%] ">
                    <img className='rounded-full w-[100px] h-[100px] ' src={src} alt="" />

                </div>
                <h3 className='font-medium text-white' > {name} </h3>
                <div className="flex">
                    <IoIosStar className='text-white' />
                    <IoIosStar className='text-white' />
                    <IoIosStar className='text-white' />
                    <IoIosStar className='text-white' />
                    <IoIosStar className='text-white' />
                </div>
                <p className='max-w-[600px] text-white font-medium text-center ' > {msg} </p>
            </div>
    )
}

export default PlumberClient