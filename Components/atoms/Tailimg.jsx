import Image from 'next/image';
import React from 'react';

function Tailimg({ src }) {
  return (
    <div className="overflow-hidden bg-black rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 transform">
      <Image
        className="object-cover w-full h-[270px] transition-transform duration-500 ease-in-out hover:scale-110"
        src={src}
        alt="Tile Image"
        width={500}  // Keep width as needed
        height={270} // Fixed height for all images
      />
    </div>
  );
}

export default Tailimg;
