import React, { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';  // Assuming you have Link logo component
import { MdMenu } from "react-icons/md";
import Link from 'next/link';
import Container from '../atoms/Container';

function Headermain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State to toggle Services dropdown visibility on mobile

  // Toggle menu visibility for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle Services dropdown visibility for mobile menu
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Lock/unlock body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#164B8D] '>
      <Container>
      <div className='flex justify-between items-center w-full '>
        <Logo />

        {/* Header Section */}
        <header className="header">
          <nav className="navbar">
            {/* Menu for large screens */}
            <ul className="hidden xl:flex lg:flex md:hidden sm:hidden">
              <li className="navItem">
                <Link href="/" className="navLink hover:bg-[#246fa3] px-4 py-2 rounded">Home</Link>
              </li>

              {/* Services with dropdown */}
              <li className="navItem relative group">
                <Link href="#" className="navLink hover:bg-[#164B8D] px-4 py-2 rounded">Services</Link>
                <ul className="dropdown absolute left-0 top-full bg-[#164B8D] hidden group-hover:block p-0 m-0 w-48">
                  <li><Link href="/acservice" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">AC Services</Link></li>
                  <li><Link href="/tileservice" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Tile Fixing</Link></li>
                  <li><Link href="/celling" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Celling</Link></li>
                  <li><Link href="/plumbing" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Plumbing Works</Link></li>
                  <li><Link href="/kitchen" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Kitchen Renovation</Link></li>
                  <li><Link href="/bathroom" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Bathroom Renovation</Link></li>
                  <li><Link href="#" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Glass Works</Link></li>
                  <li><Link href="/electricservice" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Electrical Works</Link></li>
                  <li><Link href="/painting" className="dropdownLink hover:bg-[#246fa3] px-4 py-2 block">Paint Works</Link></li>
                </ul>
              </li>

              <li className="navItem">
                <Link href="/about" className="navLink hover:bg-[#246fa3] px-4 py-2 rounded">About</Link>
              </li>
              <li className="navItem">
                <Link href="/contactus" className="navLink hover:bg-[#246fa3] px-4 py-2 rounded">Contact</Link>
              </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="menu">
              <MdMenu
                className='text-[30px] xl:hidden lg:hidden md:block block cursor-pointer'
                onClick={toggleMenu}  // Toggle mobile menu visibility
              />
            </div>
          </nav>
        </header>

        {/* Slide-in Menu for Mobile */}
        <div className={`mobileMenu fixed top-0 left-0 h-full bg-[#3787C3] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform-none' : '-translate-x-full'} z-50 p-8`}>
          <ul className="mobileNavList space-y-4">
            <li><Link href="/" className="mobileNavLink hover:bg-[#246fa3] p-4 block">Home</Link></li>

            {/* Services dropdown for mobile */}
            <li className="relative">
              <Link 
                href="#" 
                className="mobileNavLink hover:bg-[#246fa3] p-4 block"
                onClick={toggleServices}  // Toggle mobile services dropdown visibility
              >
                Services
              </Link>
              {isServicesOpen && (
                <ul className="mobileDropdown space-y-2 pl-6 bg-[#246fa3] mt-2">
                  <li><Link href="/acservice" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">AC Services</Link></li>
                  <li><Link href="/tileservice" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Tile Fixing</Link></li>
                  <li><Link href="/celling" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Celling</Link></li>
                  <li><Link href="/plumbing" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Plumbing Works</Link></li>
                  <li><Link href="/kitchen" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Kitchen Renovation</Link></li>
                  <li><Link href="/bathroom" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Bathroom Renovation</Link></li>
                  <li><Link href="#" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Glass Works</Link></li>
                  <li><Link href="/electricservice" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Electrical Works</Link></li>
                  <li><Link href="/painting" className="mobileDropdownLink hover:bg-[#246fa3] p-4 block">Paint Works</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/about" className="mobileNavLink hover:bg-[#246fa3] p-4 block">About</Link></li>
            <li><Link href="/contactus" className="mobileNavLink hover:bg-[#246fa3] p-4 block">Contact</Link></li>
          </ul>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default Headermain;
