import React from 'react'
import Container from '../atoms/Container'
import Image from 'next/image'

function Tile2ndban() {
  return (
    <Container>
      <div className="my-16 xl:flex xl:items-center xl:justify-between gap-10 flex flex-col-reverse xl:flex-row bg-[#1357A6] p-10 rounded-lg shadow-lg">
        
        {/* Image Section */}
        <div className="relative shadow-lg rounded-lg overflow-hidden xl:w-[48%] w-full">
          <Image 
            src="/assits/images/tiles01.jpg"
            alt="Tile Services"
            width={800}
            height={600}
            className="hover:scale-105 transform transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 xl:w-[50%] w-full text-center xl:text-left text-white">
          <h1 className="text-3xl font-semibold leading-tight">
            Rely On Us For Tile Fix Dubai: We Are Top Tile Fixing Contractors In Dubai!
          </h1>
          <p className="text-lg leading-relaxed">
            As one of the top tile fixing contractors in Dubai, our team at Rely On Us is proud to offer our professional services to residents and businesses throughout the city. We have a team of experienced and qualified professionals who are available to help with any tile fixing needs you may have.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you need help with a small repair or a complete tile installation, we are here to help. We also offer a wide range of other services, including tile cleaning and tile restoration. No matter what your needs are, we are confident that we can provide you with the services you need.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Tile2ndban
