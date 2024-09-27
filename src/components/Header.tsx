import React, { useState } from "react";
import CartIcon from "../assets/icons/CartIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import FavouritesIcon from "../assets/icons/FavouritesIcon";
import { Link } from "react-router-dom";
import { RxCaretDown, RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useCartStore } from "../store/CartStore";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const { cart } = useCartStore();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="w-full z-50 relative">
     <div className="w-full fixed bg-primary shadow-sm">
     <div className="flex justify-between px-8 md:px-16 py-5 max-w-[1440px] mx-auto">
        <Link to="/">
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-bold max-sm:text-[20px]">
              E-Commerce
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-6 max-xl:gap-1">
          <span className="w-[114px] flex items-center gap-2 font-[200]">
            Winter <RxCaretDown />{" "}
          </span>
          <span className="w-[114px] flex items-center gap-2">
            Summer <RxCaretDown />{" "}
          </span>
          <span className="w-[114px]">Accessories</span>
          <span className="w-[114px]">Dresses</span>
          <span className="w-[114px]">Shoes</span>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <SearchIcon />
          <Link to="/cart" className="relative">
            <CartIcon />
            {cart.length > 0 && (
              <div className="bg-primary absolute rounded-full text-xs p-2 -top-6 left-3 h-8 w-8 flex items-center justify-center">
                {cart.length}
              </div>
            )}
          </Link>
          <FavouritesIcon />
        </div>
        <div
          className={`flex items-center justify-center lg:hidden z-20 ${
            isMobileNavOpen ? "" : ""
          }`}
        >
       {isMobileNavOpen ? (
        <RxCross1
          size={28}
          onClick={toggleMobileNav}
          className="cursor-pointer transition transform duration-300 ease-in-out rotate-0"
        />
      ) : (
        <RxHamburgerMenu
          size={28}
          onClick={toggleMobileNav}
          className="cursor-pointer transition transform duration-300 ease-in-out rotate-0"
        />
      )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out absolute top-0 bg-primary z-10  h-[100vh] right-0 p-5 pt-[100px] shadow-md ${
          isMobileNavOpen ? "opacity-100 w-[240px]" : "opacity-0 w-0"
        }`}
      >
        <div className="flex flex-col gap-4 mt-4">
          <span className="w-[114px] flex items-center gap-2 font-[200]">
            Winter <RxCaretDown />{" "}
          </span>
          <span className="w-[114px] flex items-center gap-2">
            Summer <RxCaretDown />{" "}
          </span>
          <span className="w-[114px]">Accessories</span>
          <span className="w-[114px]">Dresses</span>
          <span className="w-[114px]">Shoes</span>
          <div className="flex items-center gap-6 mt-10">
            <SearchIcon color="white" />
            <Link to="/cart" className="relative">
              <CartIcon color="white" />
              {cart.length > 0 && (
                <div className="bg-primary absolute rounded-full text-xs p-2 -top-6 left-3 h-8 w-8 flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </Link>
            <FavouritesIcon color="white" />
          </div>
        </div>
      </div>
     </div>
    </header>
  );
};

export default Header;
