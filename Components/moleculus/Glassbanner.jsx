import React from 'react'

function Glassbanner() {
    return (
        <div style={{ backgroundImage: "url('/assits/images/glass9.jpg');" }} className='h-[348px] bg-no-repeat w-full bg-cover items-center justify-center relative' >
            <h2 className='text-[white] text-[36px] font-semibold absolute  top-[40%] left-[40%] z-30'>Glass Service</h2>
            <div className='h-[348px] bg-black opacity-[50%] w-full  '>
            </div>
        </div>
    )
}

export default Glassbanner
