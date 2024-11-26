import React from 'react';
import Container from '../atoms/Container';
import { FaRegEnvelope } from "react-icons/fa";
import Span from '../atoms/Span';
import { FaMobileAlt } from "react-icons/fa";
import Heading from '../atoms/Heading';
import AnchorTag from '../atoms/Anchortag';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Paragraph from '../atoms/Paragraph';
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import '../../app/globals.css'
import Logo from '../atoms/Logo';

function Footer() {

    return (
        <div className="bg-[#164B8D]">
            <Container>
                <div className=''>
                    <hr />
                    <div className='pt-[2+%] xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:mt-5 sm:grid-cols-1 grid grid-cols-1'>

                        <div>
                            <div className='relative gap-[10px] bottom-[20px] flex flex-col mt-6 xl:order-none lg:order-none md:order-none sm:order-1 order-1'>
                              <Logo  className="xl:w-[90px] lg:w-[130px] md:w-[150px] sm:w-[50%] w-[50%]"/>
                                <Span level="footer">company name Waqas Fahad <br /> Technical Services. Al Qouz Dubai</Span>
                            </div>
                            <div>
                            </div>
                        </div>

                        <div className='flex flex-col pb-[20px] ml-[30px] mt-6 xl:order-none lg:order-none md:order-none sm:order-4 order-4'>
                            <Heading level="4">Company</Heading>
                            <div className='grid gap-[10px] mt-[20px]'>
                                <Link href='/acservice' className='footer-link'>AC Services</Link>
                                <Link href='/tileservice' className='footer-link'>Tiles Fixing</Link>
                                <Link href='/electricservice' className='footer-link'>Electrician Services</Link>
                                <Link href='/plumbing' className='footer-link'>Plumbing Works</Link>
                                <Link href='/bathroom' className='footer-link'>Bathroom Renovation</Link>
                                <Link href='/PaintingPortion' className='footer-link'>Painting Works</Link>
                                <Link href='/kitchen' className='footer-link'>Kitchen Renovation</Link>
                                <Link href='/celling' className='footer-link'>Celling</Link>
                            </div>
                        </div>

                        <div className='flex flex-col mt-6 xl:order-none lg:order-none md:order-none sm:order-5 order-5'>
                            <Heading level="4">Support</Heading>
                            <div className='grid gap-[10px] mt-[20px]'>
                                <Link href='/contactus' className='footer-link'>Contact Us</Link>
                            </div>
                        </div>

                        <div className='flex flex-col my-6 xl:order-none lg:order-none md:order-none sm:order-2 order-2'>
                            <Heading level="4">Newsletter</Heading>
                            <div className="mt-[20px] grid gap-[10px]">
                                <Span level='footer'>Signup our newsletter to get update information, news, insight or promotions.</Span>
                                <input type="text" placeholder=' Email' className='w-[100%] rounded-[30px] h-[45px] outline-[#45a6af] text-[14px] px-[20px] bg-[#f8f7f7] py-[5px] text-[#b4b3b3]' />
                                <div className="hover-fill-from-bottom border-transparent hover:border-white border bg-white leading-[30px] py-[11px] flex justify-center items-center xl:w-[100%] lg:w-[17%] md:w-[25%] sm:w-[30%] w-[60%]">
                                    <Link href="/contactus" className="flex items-center leading-[30px] text-[18px] font-[600]">
                                        SignUp
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>
            <div className="bg-[#164B8D] border-t-2 border-solid border-white text-[14px] text-white py-[30px] flex flex-col items-center justify-center sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-row md:px-[10px] md:items-center md:justify-between lg:flex lg:flex-row lg:px-[80px] lg:justify-between xl:flex xl:flex-row xl:px-[100px] xl:justify-between">
                <p className='order-2 sm:order-2 md:order-none lg:order-none xl:order-none'>Copyright © 2022 Jezzcool, All rights reserved. Powered by MoxCreative.</p>
                <div className='gap-[10px] xl:flex xl:flex-row xl:pb-0 xl:items-center xl:justify-center lg:flex lg:flex-row lg:items-center lg:pb-0 lg:justify-center md:xl:flex md:flex-row md:items-center md:pb-0 md:justify-center sm:flex sm:flex-col sm:items-center sm:pb-4 sm:justify-center flex flex-col pb-4 items-center justify-center order-1 sm:order-1 md:order-none lg:order-none xl:order-none'>
                    <Link href='' className="footer-link">Term of use</Link>
                    <Link href='' className="footer-link">Privacy policy</Link>
                    <Link href='' className="footer-link">Cookie policy</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;