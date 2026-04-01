import Logo from '@/assets/images/logo/logo.svg';
import IconUser from '@/assets/images/icons/icon-user.svg';
import IconHelp from '@/assets/images/icons/icon-help.svg';
import { Link } from '@tanstack/react-router';
import { MenuMobile } from '../MenuMobile';
import { CartButton } from '../CartButton';
import { CartDrawer } from '../CartDrawer';
import { useState } from 'react';

export interface NavLink {
  name: string;
  to: string;
  search?: { gender: 'MEN' | 'WOMEN' | 'UNISEX' };
  params?: { category: string };
}

const navLinks: NavLink[] = [
  // Genders use Search Params
  { name: 'Men', to: '/products', search: { gender: 'MEN' } },
  { name: 'Women', to: '/products', search: { gender: 'WOMEN' } },
  { name: 'Unisex', to: '/products', search: { gender: 'UNISEX' } },

  // Styles use Path Params ($category)
  { name: 'Casual', to: '/products/category/$category', params: { category: 'casual' } },
  { name: 'Modern', to: '/products/category/$category', params: { category: 'modern' } },
  { name: 'Sport', to: '/products/category/$category', params: { category: 'sport' } },
];

export const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <header
        className="fixed top-10 left-0 right-0 z-10
 mx-10"
      >
        <div className="bg-surface text-primary max-w[1320px] mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5 shadow-md">
          <Link to="/">
            <img src={Logo} alt="logo Syntaxwear" className="w-32 md:w-36" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <Link
                  to={link.to}
                  search={link.search}
                  params={link.params}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-4 md:gap-10 items-center justify-center">
              <li className="hidden lg:block">
                <Link to="/our-stores">Our Stores</Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">About</Link>
              </li>
              <li className="lg:hidden">
                <MenuMobile navLinks={navLinks} />
              </li>
              <li className="hidden lg:block">
                <Link to="/sign-in">
                  <img src={IconUser} alt="user icon log-in" />
                </Link>
              </li>

              <li className="hidden lg:block">
                <a href="#">
                  <img src={IconHelp} alt="help icon" />
                </a>
              </li>
              <li>
                <CartButton onClick={() => setCartIsOpen(true)} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <CartDrawer isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)} />
    </div>
  );
};
