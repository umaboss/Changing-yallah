import React from "react";

const HeroSection = ({ children1, src }) => {
  return (
    <div>

      <div className="  w-full gap-8 my-[100px] xl:flex xl:flex-row xl:items-center xl:justify-center md:flex md:flex-row md:items-center md:justify-center  sm:flex sm:flex-col sm:items-center sm:justify-center  flex flex-col items-center justify-center ">
        <div className="left flex flex-col gap-[20px] items-center justify-left xl:text-start xl:w-[40%] xl:order-none  lg:order-none lg:w-[40%] lg:text-start md:order-none md:w-[100%] md:text-start sm:order2 sm:w-full order-2 w-full text-center sm:text-center">
          <h1 className='text-[34px] font-semibold leading-[41px] text-[#091736] my-[10px]'>
            Rely On Us For Painting Dubai: We Are Top Painter In Dubai!</h1>
          <p className="text-[16px] text-[#091736] font-[400] w-[100%]">{children1}</p>
        </div>
        <div className="right xl:w-[60%] h-[500px] overflow-hidden md:w-full md:m-auto sm:w-full sm:m-auto xl:order-none lg:order-none md:order-none sm:order1  order-1 ">
          <img src={src} alt="image" />
        </div>
      </div>
    </div>
  );

};

export default HeroSection;
