import { useState } from 'react';
import IconBurger from '../../assets/images/icons/icon-burger.svg';
import { Link } from '@tanstack/react-router';
import { FaRegUserCircle } from 'react-icons/fa';
import type { NavLink } from '../Header';
import { IoMdClose } from 'react-icons/io';

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={IconBurger} alt="Burger menu icon" />
      </button>

      {/* Overlay */}
      <div
        className={`${menuIsOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {/* drawer */}
        <div
          className={`${menuIsOpen ? 'translate-x-0' : '-translate-x-full'} absolute top-0 bottom-0 bg-background pt-6 transition-all duration-500 ease-in-out w-75`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="p-5">
            <div className='flex justify-between items-center'>
              <h1 className="text-[20px]">Hello, there!</h1>
              <IoMdClose className='cursor-pointer text-2xl' onClick={() => setMenuIsOpen(false)}/>
            </div>
            <nav className="font-semibold hover:text-accent-hover">
              <Link to="/sign-in" className="flex items-center gap-3 mt-2">
                <FaRegUserCircle className="h-6 w-6" />
                <p>Log in</p>
              </Link>
            </nav>
          </header>

          <ul
            className="px-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-4 mt-2"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {navLinks.map((link) => (
              <Link to={link.href} key={link.name}>
                {link.name}
              </Link>
            ))}
            <li>
              <Link to="/our-stores">Our Stores</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <footer className="absolute bottom-0 w-full h-[100px] p-4">
            <button className="w-full mt-4 bg-[#6329A2] text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-[#5433eb] focus:outline-none focus:ring-2 focus:ring-[#5433eb] disabled:opacity-50 disabled:cursor-not-allowed">
              Check out
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
