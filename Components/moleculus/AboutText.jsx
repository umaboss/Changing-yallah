import React, { useState } from 'react';
import '../../app/globals.css';
import Link from 'next/link';
function AboutText() {
    const [showMore, setShowMore] = useState(false);

    // Toggle between showing and hiding the additional text
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='flex flex-col gap-[20px] justify-center'>
            <h2 className='font-bold text-[30px]'>WHY CHOOSE US</h2>
            
            <p className={`text-[16px] text-[#636363] leading-[30px] transition-all duration-500 ease-in-out 
                ${showMore ? 'max-h-[1000px]' : 'max-h-[250px] overflow-hidden'}`}>
                Choose us for our unmatched expertise and commitment to excellence. Our skilled professionals deliver high-quality results, ensuring your project is completed on time and to your satisfaction.Our focus is on building long-term relationships with our clients, ensuring that your needs are met with professionalism and care. We understand the importance of reliability and trust, and we work tirelessly to exceed your expectations.We go above and beyond to ensure that your home or business is comfortable, functional, and safe.  
                {showMore && (
                    <>
                        {/* Additional details shown when "Read More" is clicked */}
                        With personalized service, attention to detail, and 24/7 support, we exceed expectations and provide reliable solutions tailored to your needs.hether you're looking for AC repairs, plumbing services, or home maintenance, we have the knowledge and tools to handle it all. Our team is equipped with the latest technology and techniques to diagnose and resolve issues quickly and efficiently, saving you time and money. We are committed to providing transparent communication throughout the process.
                        {/* Add more lines here if you want */}
                    </>
                )}
            </p>

            {/* "Read More" button */}
            <div className="hover-fill-from-bottom leading-[30px] py-[11px] flex justify-center items-center xl:w-[30%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]" onClick={toggleShowMore}>
                <Link href="#" className="flex items-center leading-[30px] text-[18px] font-[600]">
                    {showMore ? 'Read Less' : 'Read More'}
                </Link>
            </div>
        </div>
    );
}

export default AboutText;
