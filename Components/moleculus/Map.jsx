import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import { IoLocation } from 'react-icons/io5';
import Span from '../atoms/Span';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Link from 'next/link';


function Map() {
    return (
        <div className='flex flex-col items-center pt-[5%]'>
            <div className='w-full flex flex-col lg:flex-row items-start'>
                <div className='w-full lg:w-1/2 py-5 px-4'>
                    <div id="embed-map-canvas" className="w-full h-full">
                        <iframe
                            className="h-[400px] w-full border-0"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?q=al+hafiz+mobile+shop,Garha+Near+Dhol+Sikandar,+Chiniot,+Punjab+35400,+Pakistan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 pt-[5%] px-4 '>
                    <Heading level='2'>Have other questions?</Heading>
                    <div className='pt-3'>
                        <Paragraph variant='contact'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </Paragraph>
                    </div>
                    <div className='pt-[7%]'>
                        <div className='flex  items-center justify-evenly'>
                            <div className='flex   items-center text-center gap-2'>
                                <IoLocation className='text-2xl' />
                                {/* <Span level='contact'>Al Qouz, Dubai</Span> */}
                                <Link href="" className='text-[14px] font-[400] text-black'>Al Qouz, Dubai</Link>
                            </div>
                            <div className='flex-col'>
                                <Paragraph></Paragraph>
                            </div>
                            <div className='flex items-center text-center gap-2'>
                                <Link href='mailto:waqaswqspk@gmail.com'><IoMdMail className='text-2xl' /></Link>
                                {/* <Span level='contact'>waqaswqspk@gmail.com</Span> */}
                                <Link href='mailto:waqaswqspk@gmail.com' className='text-[14px] font-[400] text-black'>waqaswqspk@gmail.com</Link>
                            </div>
                        </div>
                        

                        <div className='flex text-center items-center justify-center  mr-[12%] gap-[10px] pt-[30px]'>
                           <Link href='tel:00971 50 8786126'> <IoCall className='text-[25px]' /></Link>
                            {/* <Span level='contact'>00971 50 8786126</Span> */}
                            <Link href='tel:00971 50 8786126' className='text-[14px] font-[400] text-black'>
                           
                            00971 50 8786126
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Map;
