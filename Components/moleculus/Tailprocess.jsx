import React from 'react';
import Container from '../atoms/Container';

function Tailprocess() {
  return (
    <Container>
      <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1 gap-12 items-center pb-[50px] justify-center">
        
        {/* Research */}
        <div className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1357A6]">
          <img 
            src="/assits/images/Tail9.webp" 
            alt="Research" 
            className="rounded-full hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden w-[180px] h-[180px] object-cover mb-4"
          />
          <h2 className="text-[25px] font-semibold text-[#1357A6] group-hover:text-white">
            Research
          </h2>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            We send our team to take measurements of your space and discuss preferences, needs, and budget.
          </p>
        </div>

        {/* Design */}
        <div className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1357A6]">
          <img 
            src="/assits/images/Tail10.webp" 
            alt="Design" 
            className="rounded-full w-[180px] hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden h-[180px] object-cover mb-4"
          />
          <h2 className="text-[25px] font-semibold text-[#1357A6] group-hover:text-white">
            Design
          </h2>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            We design Hajar based on your needs, preferences, and budget to ensure complete satisfaction.
          </p>
        </div>

        {/* Development */}
        <div className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1357A6]">
          <img 
            src="/assits/images/Tail11.webp" 
            alt="Development" 
            className="rounded-full hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden w-[180px] h-[180px] object-cover mb-4"
          />
          <h2 className="text-[25px] font-semibold text-[#1357A6] group-hover:text-white">
            Development
          </h2>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            We build strong client relationships through professional services and expert craftsmanship.
          </p>
        </div>

        {/* Production */}
        <div className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#1357A6]">
          <img 
            src="/assits/images/Tail12.webp" 
            alt="Production" 
            className="rounded-full hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden w-[180px] h-[180px] object-cover mb-4"
          />
          <h2 className="text-[25px] font-semibold text-[#1357A6] group-hover:text-white">
            Production
          </h2>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            We produce top-quality Hajar, Ceramic, and Marble Tiles to elevate your space’s aesthetic.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Tailprocess;
