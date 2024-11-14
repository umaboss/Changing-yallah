// components/Header.js

import Link from 'next/link'
import '../../app/globals.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link href="/" className="navLink">
              Home
            </Link>
          </li>

          {/* Services with dropdown */}
          <li className="navItem">
            <div className="servicesMenu">
              <Link href="#" className="navLink">
                Services
              </Link>
              <ul className="dropdown">
                <li>
                  <Link href="/acservice" className="dropdownLink">
                  AC Services
                  </Link>
                </li>
                <li>
                  <Link href="/tileservice" className="dropdownLink">
                  Tile Fixing
                  </Link>
                </li>
                <li>
                  <Link href="/celling" className="dropdownLink">
                  Celling
                  </Link>
                </li>
                <li>
                  <Link href="/plumbing" className="dropdownLink">
                  plumbing works
                  </Link>
                </li>
                <li>
                  <Link href="/kitchen" className="dropdownLink">
                    Kitchen Renovtion
                  </Link>
                </li>
                <li>
                  <Link href="/bathroom" className="dropdownLink">
                  athroom Renovtion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="dropdownLink">
                  Glass works
                  </Link>
                </li>
                <li>
                  <Link href="/electricservice" className="dropdownLink">
                  Electrical works
                  </Link>
                </li>
                <li>
                  <Link href="/painting" className="dropdownLink">
                 Paint works
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="navItem">
            <Link href="/about" className="navLink">
              About
            </Link>
          </li>
          <li className="navItem">
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
