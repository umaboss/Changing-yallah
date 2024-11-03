import Image from 'next/image'
import React from 'react'

function Bathimg({ src }) {
  return (
    <div className='overflow-hidden bg-black xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 mt-8 '>
<Image
  className="scale-100 bg-cover hover:scale-105 transition duration-500 ease-in object-cover w-full "
  src={src}
  alt=""
  width={500}  // Set the desired width in pixels
  height={270} // Set the corresponding height in pixels
/>
   
 </div>
  )
}



export default Bathimg
