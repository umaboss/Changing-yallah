import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/assits/ceiling.jpg',
 
];

const Cellingbanner = ({ content, button, paragraph }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      })



  return (
    <div className="relative  w-full h-[590px] overflow-hidden">
      <div
        className={`absolute text-center flex justify-center items-center flex-col mt-[-50px] w-full h-[100vh] inset-0 bg-cover bg-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative flex flex-col  justify-center items-center   z-10 text-white pt-[%] px-[8%] xl:p-8 lg:p-8 md:p-8 sm:p-4 p-4 xl:w-[50%] xl:text-start lg:w-[55%] lg:text-start md:w-[57%] md:mt-8 md:text-start sm:w-[100%] sm:mt-[150px] sm:text-center w-[100%] xl:mt-[160px] lg:mt-[160px] md:mt-[160px] sm:mt-[130px] mt-[140px] text-center">
          <div className="text-[#3787c3] uppercase  font-bold mb-5 xl:text-[50px] lg:text-[50px] md:text-[47px] sm:text-[45px] text-[40px]">{content}</div>
          <div className=" font-[300] text-center   xl:text-[18px] xl:leading-[30px] lg:text-[18px] lg:leading-[30px] md:text-[14px] md:leading-[20px] sm:text-[14px] sm:leading-[25px] text-[15px] leading-[20px]  ">{paragraph}</div>
          {/* <div className="mt-[6%] bg-[#164b8d]   cursor-pointer hover:bg-[#F97300] text-center ease-in duration-300 font-[300] rounded-[30px] py-[10px] px-[25px] xl:text-[24px] xl: w-[43%] lg:text-[20px] lg: w-[43%] md:text-[20px] md:w-[63%] sm:text-[17px] sm:w-[53%] text-[15px]  w-[53%]">{button}</div> */}
          <div className="hover-fill-from-bottom cursor-pointer mt-[20px] mb-[30px]  bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[30%] lg:w-[25%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us 
            </Link>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Cellingbanner;
