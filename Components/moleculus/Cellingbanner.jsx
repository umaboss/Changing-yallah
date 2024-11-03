import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/assits/images/pic9.jpg',
 
];

const Cellingbanner = ({ content, button, paragraph }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      })



  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div
        className={`absolute w-full h-full inset-0 bg-cover bg-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative flex flex-col  justify-center xl:items-start lg:items-start md:items-start sm:items-center items-center   z-10 text-white pt-[10%] px-[8%] p-8 xl:w-[50%] xl:text-start lg:w-[55%] lg:text-start md:w-[57%] md:mt-8 md:text-start sm:w-[100%] sm:mt-[150px] sm:text-center w-[100%] mt-[160px] text-center">
          <div className="text-[#3787c3] uppercase  font-bold mb-5 xl:text-[50px] lg:text-[50px] md:text-[47px] sm:text-[45px] text-[40px]">{content}</div>
          <div className=" font-[300]   xl:text-[18px] xl:leading-[30px] lg:text-[18px] lg:leading-[30px] md:text-[14px] md:leading-[20px] sm:text-[14px] sm:leading-[25px] text-[15px] leading-[20px]  ">{paragraph}</div>
          {/* <div className="mt-[6%] bg-[#164b8d]   cursor-pointer hover:bg-[#F97300] text-center ease-in duration-300 font-[300] rounded-[30px] py-[10px] px-[25px] xl:text-[24px] xl: w-[43%] lg:text-[20px] lg: w-[43%] md:text-[20px] md:w-[63%] sm:text-[17px] sm:w-[53%] text-[15px]  w-[53%]">{button}</div> */}
          <Link href=' contactus' className="mt-[6%] bg-[#3787c3] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] rounded-md    cursor-pointer  text-center ease-in duration-300 font-[300] py-[10px] px-[20px] xl:text-[24px] xl:w-[43%] lg:text-[20px] lg: w-[43%] md:text-[20px] md:w-[63%] sm:text-[17px] sm:w-[53%] text-[15px]  w-[53%]">{button}</Link>
        </div>
      </div>
    </div>
  );
};

export default Cellingbanner;
