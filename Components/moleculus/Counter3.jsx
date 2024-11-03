"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter3 = ({ startCount , targetCount, icon ,contant }) => {
    const [count, setCount] = useState(startCount);
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
    });

    useEffect(() => {
        if (inView) {
            let counter = startCount;
            const interval = setInterval(() => {
                counter += 1;
                setCount(counter);
                if (counter === targetCount) {
                    clearInterval(interval);
                }
            }, 2);

            return () => clearInterval(interval);
        }
    }, [inView, targetCount, startCount]);

    return (
        <div ref={ref} className='session-container justify-center flex-row flex items-center  session-counter gap-[10px]' data-aos="fade-up">
            <div className="icon">
                {icon}
            </div>
           <div className="">
           <p className='text-[#3787c3] font-bold text-[50px] pt-[5px]'>{count}+</p> {/* Display the count */}
           <h2 className='font-normal text-[#8b8a8a] text-[16px] '>{contant}</h2>
           </div>
        </div>
    );
};

export default Counter3;
