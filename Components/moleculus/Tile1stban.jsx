import React from 'react';
import Container from '../atoms/Container';
import Image from 'next/image';

function Tile1stban() {
  return (
    <Container>
      <div className="my-16 xl:flex xl:items-center xl:justify-between gap-10 flex flex-col-reverse xl:flex-row bg-[#1357A6] p-10 rounded-lg shadow-lg">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 xl:w-[50%] w-full text-center xl:text-left text-white">
          <h1 className="text-3xl font-semibold leading-tight">
            Get Reliable & Affordable Tile Fix Dubai Services From Us!
          </h1>
          <p className="text-lg leading-relaxed">
            In Dubai, Hajardubai.ae provides professional and affordable tile installation and repair services. We have a team of experienced and qualified tile fixers who can get the job done quickly and efficiently. We also use high-quality materials and equipment to ensure that your tiles are installed or repaired properly.
          </p>
          <p className="text-lg leading-relaxed">
            If you need tile installation or repair services in Dubai, then please contact us today. We would be happy to discuss your requirements and provide you with a free quote.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative shadow-lg rounded-lg overflow-hidden xl:w-[48%] w-full">
          <Image 
            src="/assits/images/tile2.jpg" 
            alt="Tile Services" 
            width={800} 
            height={600} 
            className="hover:scale-105 transform transition-transform duration-300"
          />
        </div>
      </div>
    </Container>
  );
}

export default Tile1stban;
