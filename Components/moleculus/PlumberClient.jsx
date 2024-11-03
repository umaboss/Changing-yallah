import React from 'react'
import { IoIosStar } from "react-icons/io";

const PlumberClient = ( { src , name , msg } ) => {
    return (
            <div className=' flex mx-[8%] rounded-[10px] hover:shadow-xl ml-[9%]  justify-center items-center bg-gray-200 py-[70px] mb-[50px] flex-col gap-[15px] items-center  ' >
                <div className="imge w-[10%] ">
                    <img className='rounded-full w-[100%] h-[full] ' src={src} alt="" />

                </div>
                <h3 className='font-medium' > {name} </h3>
                <div className="flex">
                    <IoIosStar className='text-blue-500' />
                    <IoIosStar className='text-blue-500' />
                    <IoIosStar className='text-blue-500' />
                    <IoIosStar className='text-blue-500' />
                    <IoIosStar className='text-blue-500' />
                </div>
                <p className='max-w-[600px] text-gray-700 font-medium text-center ' > {msg} </p>
            </div>
    )
}

export default PlumberClient