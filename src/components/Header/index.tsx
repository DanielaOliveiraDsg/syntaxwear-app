import Logo from '@/assets/images/logo/logo.svg';
import IconUser from '@/assets/images/icons/icon-user.svg';
import IconHelp from '@/assets/images/icons/icon-help.svg';
import { Link } from '@tanstack/react-router';
import { ShoppingCart } from '../ShoppingCart';
import { MenuMobile } from '../MenuMobile';

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  {name: "Men", href: "/products"},
  {name: "Women", href: "/products"},
  {name: "Outlet", href: "/products"},
]
export const Header = () => {
  return (
    <div className="relative">
      <header
        className="fixed top-10 left-0 right-0 z-10
 mx-10"
      >
        <div className="bg-[#fafafa] text-[#6329A2] max-w[1320px] mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5 shadow-md">
          <Link to="/">
            <img src={Logo} alt="logo Syntaxwear" className="w-32 md:w-36" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <Link to={link.href} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-4 md:gap-10 items-center">
              <li className="hidden lg:block">
                <Link to='/our-stores'>Our Stores</Link>
              </li>
              <li className="hidden lg:block">
                <Link to='/about'>About</Link>
              </li>
              <li className='lg:hidden'>
                <MenuMobile navLinks={navLinks} />
              </li>
              <li className='hidden lg:block'>
                <Link to="/sign-in">
                  <img src={IconUser} alt="user icon log-in" />
                </Link>
              </li>

              <li className='hidden lg:block'>
                <a href="#">
                  <img src={IconHelp} alt="help icon" />
                </a>
              </li>
              <li>
                {/* <a href="#">
                  <img src={IconCart} alt="cart icon" />
                </a> */}
                <ShoppingCart />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
