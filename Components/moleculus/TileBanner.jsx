import React from 'react'

function TileBanner() {
  return (
    <div style={{ backgroundImage: "url('/assits/Tiles Fixing/tilebanner.jpg');" }} className='h-[348px] bg-no-repeat w-full bg-cover items-center justify-center relative' >
        <h2 className='text-[white] text-[36px] font-semibold absolute  top-[57%] xl:left-[44%] lg:left-[44%] md:left-[44%] sm:left-[40%] left-[28%] z-30'>  Tiles Fix</h2>
      <div className='h-[348px] bg-black opacity-[50%] w-full  '>
      </div>
    </div>
  )
}

export default TileBanner
