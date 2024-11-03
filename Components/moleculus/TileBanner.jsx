import React from 'react'

function TileBanner() {
  return (
    <div style={{ backgroundImage: "url('/assits/images/tile.jpg');" }} className='h-[348px] bg-no-repeat w-full bg-cover items-center justify-center relative' >
        <h2 className='text-[white] text-[36px] font-semibold absolute  top-[40%] left-[44%] z-30'>  Tiles Fix</h2>
      <div className='h-[348px] bg-black opacity-[50%] w-full  '>
      </div>
    </div>
  )
}

export default TileBanner
