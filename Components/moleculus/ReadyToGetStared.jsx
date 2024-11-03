import React from "react";
import Container from "../atoms/Container";
import Link from "next/link";

const ReadyToGetStared = () => {
  return (
    <Container>
      <div className="flex  my-[100px] flex-col w-full items-center justify-between text-center xl:w-[50%] xl:my-[100px] xl:ml-[300px] lg:w-[50%] lg:my-[100px] lg:ml-[300px]">
        <h2 className="text-[#091736] text-[32px] font-[700] mb-[20px]">
          Ready to Get Started?
        </h2>
        <p className="text-[#8b8a8a] text-[16px] font-[400]">
          Contact Dubai Painting Services now to get villa painting services!
          Feel free to ask any questions, tell us about your project in detail
          as we believe in mutual understanding between the both sides, get a
          free consultation and quote. Let us help you tun your villa into a
          colorful and lively home that you will enjoy.
        </p>
        {/* <button className="px-[50px] py-[15px] cursor-pointer text-white bg-blue-900 rounded-lg mt-[30px]">
          Contact Now
        </button> */}
        <Link href='/contactus'  className="px-[50px] py-[15px] cursor-pointer bg-[#3787c3] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in rounded-[5px] mt-[30px]">Contact Now</Link>
      </div>
    </Container>
  );
};

export default ReadyToGetStared;
