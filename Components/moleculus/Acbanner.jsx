import { useState, useEffect } from 'react';
import  AnchorTag from '@/Components/atoms/Anchortag'
import Link from 'next/link';
const images = [
  '/assits/images/pic1.jpg',
  '/assits/images/pic2.jpg',
  '/assits/images/pic3.jpg',
  '/assits/images/pic4.jpg'
];

const AcBanner = ({ content, anchortag, paragraph }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 200); // Duration of the fade-out effect
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div
        className={`absolute w-full h-full inset-0 bg-cover bg-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative w-[50%] z-10 text-white pt-[10%] px-[8%] p-8">
          <div className="text-[#3787c3] uppercase text-[50px] font-bold mb-5">{content}</div>
          <div className="text-[18px] font-[300] leading-[30px]    ">{paragraph}</div>
          <div className='pt-[20px]'>
          <Link href="/contactus" className='mt-[6%] bg-[#3787c3]  capitalize hover:bg-white hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in text-center text-[24px] w-[43%] rounded-[5px]  font-[300]  py-[10px] px-[25px] cursor-pointer' >{anchortag}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AcBanner;