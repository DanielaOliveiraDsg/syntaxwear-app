import Logo from '@/assets/images/logo/logo.svg';
import IconUser from '@/assets/images/icons/icon-user.svg';
import IconHelp from '@/assets/images/icons/icon-help.svg';

import { Link } from '@tanstack/react-router';
import { ShoppingCart } from '../ShoppingCart';

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

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-4 md:gap-10">
              <li className="hidden md:block">
                <a href="#">Our Stores</a>
              </li>
              <li className="hidden md:block">
                <a href="#">About</a>
              </li>
              <li>
                <Link to="/sign-in">
                  <img src={IconUser} alt="user icon log-in" />
                </Link>
              </li>

              <li>
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
