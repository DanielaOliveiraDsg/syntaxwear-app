import { useContext, useState } from 'react';
import IconBurger from '../../assets/images/icons/icon-burger.svg';
import { Link, useNavigate } from '@tanstack/react-router';
import { FaRegUserCircle } from 'react-icons/fa';
import type { NavLink } from '../Header';
import { IoMdClose } from 'react-icons/io';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { PiSignOut } from 'react-icons/pi';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { CheckoutButton } from '../CheckoutButton';

interface MenuMobileProps {
  navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, logOut } = useAuth();
  const { cart } = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate({ to: '/' });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
        className={`${menuIsOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-600 ease-in-out`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {/* drawer */}
        <div
          className={`${menuIsOpen ? 'translate-x-0' : '-translate-x-full'} absolute top-0 bottom-0 bg-background pt-6 transition-all duration-500 ease-in-out w-75`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="p-5">
            <div className="flex justify-between items-center">
              {isAuthenticated ? (
                <h1 className="text-[20px]">Welcome back!</h1>
              ) : (
                <h1 className="text-[20px]">Hi, there!</h1>
              )}
              <IoMdClose
                className="cursor-pointer text-2xl"
                onClick={() => setMenuIsOpen(false)}
              />
            </div>
            <nav className="font-semibold hover:text-accent-hover">
              {isAuthenticated ? (
                
                <div className="flex items-center gap-3 mt-2 text-primary">
                  <FaRegUserCircle className="h-6 w-6" />
                  <p>Hello, {user?.firstName}</p>
                </div>
              ) : (
                <Link
                  to="/sign-in"
                  className="flex items-center gap-3 mt-2 hover:text-accent transition-colors"
                  onClick={() => setMenuIsOpen(false)} // Close menu when clicking login
                >
                  <FaRegUserCircle className="h-6 w-6" />
                  <p>Log in</p>
                </Link>
              )}
            </nav>
          </header>

          <ul
            className="px-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-4 mt-2"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                search={link.search}
                params={link.params}
              >
                {link.name}
              </Link>
            ))}
            <li>
              <Link to="/our-stores">Our Stores</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            {isAuthenticated && (
              <li>
                <button
                  onClick={handleLogOut}
                  className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                  Log out
                  <PiSignOut className="w-5 h-5" />
                </button>
              </li>
            )}
          </ul>

          <footer className="absolute bottom-0 w-full h-[100px] p-4">
            {
              <CheckoutButton
                isCartEmpty={isCartEmpty}
                itemCount={cart.length}
                emptyText="Shop Collection"
                onClick={() => {
                  setMenuIsOpen(false); // Mobile menu logic
                  navigate({
                    to: isCartEmpty ? '/products' : '/order/checkout',
                  });
                }}
              />
            }
          </footer>
        </div>
      </div>
    </>
  );
};
