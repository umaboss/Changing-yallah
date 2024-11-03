import React from 'react'
import Span from '../atoms/Span'
import Container from '../atoms/Container'

function Clints() {
  return (
    <div className='py-[5%]'>
      <div className='bg-[#3787c3]    '>
        <Container>
          <div className=' items-center justify-center py-[50px] xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
            <div className='tracking-[3px] flex flex-col items-center jusitfy-center xl:border-b-0 lg:border-0 md:border-0 sm:border-b-2 sm:py-[10px] py-[20px] border-b-2 sm:mx-[150px] mx-[150px] '>
              <Span level='clintbox'> 1256</Span>
              <div className='text-center'>
                <Span level='clint'>CLIENTS</Span>
              </div>
            </div>

            <div className=' tracking-[3px] flex flex-col items-center jusitfy-center  xl:border-b-0 lg:border-0 md:border-0 sm:border-b-2 sm:py-[10px] py-[20px] border-b-2 sm:mx-[150px] mx-[150px] '>
              <Span level='clintbox'> 2340</Span>
              <div className='text-center'>
                <Span level='clint'>WORKED DONE</Span>
              </div>
            </div>

            <div className='tracking-[3px] flex flex-col items-center jusitfy-center xl:border-b-0 lg:border-0 md:border-0 sm:border-b-2 sm:py-[10px] py-[20px] border-b-2 sm:mx-[150px] mx-[150px] '>
              <Span level='clintbox'> 1242</Span> 
              <div className='text-center'>
                <Span level='clint'>SATISFIED CLIENTS</Span>
              </div>
            </div>
            <div className='tracking-[3px] flex flex-col items-center jusitfy-center xl:border-b-0 lg:border-0 md:border-0 sm:border-b-0 sm:py-[10px] py-[20px] border-b-0 sm:mx-[150px] mx-[150px] '>
              <Span level='clintbox'> 700</Span>
              <div className='text-center'>
                <Span level='clint'>BONUSES</Span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Clints