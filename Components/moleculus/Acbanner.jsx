import Link from 'next/link';

const AcBanner = ({ content, anchortag, paragraph }) => {
  // Ek static image ke liye fixed URL use karein
  const staticImage = '/assits/images/pic1.jpg';

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div
        className="absolute w-full h-full inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${staticImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center mt-[50px] flex justify-center items-center flex-col w-[100%] z-10 text-white pt-[10%] px-[8%] p-8">
          <div className="text-[#3787c3] uppercase text-[50px] font-bold mb-5">{content}</div>
          <div
            className="text-[18px] font-[300] leading-[30px]"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
          <div className="hover-fill-from-bottom mt-[20px] bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[17%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
            <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcBanner;
