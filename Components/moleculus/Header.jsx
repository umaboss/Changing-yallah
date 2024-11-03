import React, { useState } from "react";
import AnchorTag from "../atoms/Anchortag";
import "../../app/globals.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";





const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDesktopDropdownVisible, setDesktopDropdownVisible] = useState(false);
  const [isMobileDropdownVisible, setMobileDropdownVisible] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setNavOpen(false); // Close the mobile menu if an item is clicked
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleDesktopDropdown = () => {
    setDesktopDropdownVisible(!isDesktopDropdownVisible);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible(!isMobileDropdownVisible);
  };
   

  return (
    <div className="">
      <div className="full  ">
        {/* Desktop Navigation */}
        <ul className="gap-[50px] xl:flex xl:items-center xl:justify-center lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center sm:hidden hidden">
        <li 
            onClick={() => handleItemClick("Home")}
            className={`text-[12px] font-[400] ${activeItem === "Home" ? "text-[#3787c3]" : ""}`}
          >
            <Link href="/" className="flex items-center leading-[50px]  font-[700] cursor-pointer text-[17px] font-[600] ease-in duration-300">
              Home
            </Link>
          </li>
          <li 
            onClick={() => handleItemClick("About")}
            className={`text-[12px] font-[400] ${activeItem === "About" ? "text-[#3787c3]" : ""}`}
          >
            <Link href="/about" className="flex items-center leading-[50px]  font-[700] cursor-pointer text-[17px] font-[600] ease-in duration-300">
              About
            </Link>
          </li>
          <li
          onClick={() => handleItemClick('Services')}
          className={`text-[12px] font-[400] relative  ${activeItem === 'Services' ? 'text-[#3787c3]  ' : ''
          }`} 
          >
            <Link
              className="flex items-center leading-[50px]  font-[700] cursor-pointer  text-[17px] font-[600] ease-in duration-300"
              href="/service"
              onMouseEnter={toggleDesktopDropdown}
              onclick={toggleDesktopDropdown}
            >
              Services <IoIosArrowDown />
            </Link>
            {isDesktopDropdownVisible && (
              <ul className="dropdown absolute divide-y bg-white z-[9999] visible w-[230px] py-[10px] pr-[50px] pl-[30px]">
                <li><Link href="/acservice" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">AC Services</Link></li>
                <li><Link href="/service" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Other Services</Link></li>
                <li><Link href="/tileservice" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Tiles Fixing</Link></li>
                <li><Link href="/electricservice" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Electrician Services</Link></li>
                <li><Link href="/plumbing" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Handyman & Plumber</Link></li>
                <li><Link href="/bathroom" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Bathroom Services</Link></li>
                <li><Link href="/painting" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Painting Services</Link></li>
                <li><Link href="/kitchen" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Kitchen Service</Link></li>
                <li><Link href="/celling" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Gypsum Ceiling</Link></li>
              </ul>
            )}
          </li>
          <li 
          onClick={() => handleItemClick(' Contact')}
          className={`text-[12px] font-[400]  ${
            activeItem === ' Contact' ? 'text-[#3787c3]  ' : ''
          }`} 
          >
            <Link  href="/contactus"
            className="flex items-center leading-[50px]    font-[700] cursor-pointer  text-[14px] font-[600] ease-in duration-300" >
              Contact
              </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <span
          id="open"
          className={`block shadow-2xl cursor-pointer xl:hidden lg:hidden md:hidden sm:block`}
        >
          <button onClick={toggleNav}>
            <IoMdMenu fontSize={30} />
          </button>
        </span>
      </div>

      {/* Mobile Sidenav */}
      <div
        id="mySidenav"
        className={`sidenav fixed w-[250px] h-[100vh] transition-transform duration-500 ease-in-out bg-white z-[100000] xl:hidden lg:hidden md:hidden ${isNavOpen ? "right-0" : "right-[-250px]"}`}
      >
        <button onClick={toggleNav} className="hover:rotate-[180deg] transition">
          <RxCross1 className="text-[#33372C] text-[30px]" />
        </button>

        <ul className="flex flex-col items-center justify-center mt-4">
          <li>
            <Link  href="/"  className="flex items-center leading-[50px] hover:text-[#4ab7c3] font-[700] cursor-pointer text-[#33372C] text-[15px] font-[600] ease-in duration-300"  onClick={toggleNav}>Home</Link>
          </li>
          <li>
            <Link  href="/about" className="flex items-center leading-[50px] hover:text-[#4ab7c3] font-[700] cursor-pointer text-[#33372C] text-[15px] font-[600] ease-in duration-300" onClick={toggleNav}>About</Link>
          </li>
          <li className="relative">
            <Link
              className="flex items-center leading-[50px] hover:text-[#34792] font-[700] cursor-pointer text-[#33372C] text-[15px] font-[600] ease-in duration-300" 
              href="#"
              onClick={toggleMobileDropdown}
            >
              Services <IoIosArrowDown />
            </Link>
            {isMobileDropdownVisible && (
              <ul className="dropdown bg-white z-[9999] visible py-[10px] w-[100%]">
                 <li><Link href="/acservice" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">AC Services</Link></li>
                 <li><Link href="/service" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Other Services</Link></li>
                <li><Link href="/tileservice" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Tiles Fixing</Link></li>
                <li><Link href="/electricservice" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Electrician Services</Link></li>
                <li><Link href="/plumbing" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Handyman & Plumber</Link></li>
                <li><Link href="/bathroom" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Bathroom Services</Link></li>
                <li><Link href="/painting" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Painting Services</Link></li>
                <li><Link href="/kitchen" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Kitchen Service</Link></li>
                <li><Link href="/celling" className="leading-[40px] hover:text-[#4ab7c3] cursor-pointer text-[#33372C] text-[14px] font-semibold">Gypsum Ceiling</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contactus" className="flex items-center leading-[50px] hover:text-[#34792] font-[700] cursor-pointer text-[#33372C] text-[15px] font-[600] ease-in duration-300" onClick={toggleNav}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
