import { useState } from "react";

function Header({ cartCount = 0, onToggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container relative flex justify-between items-center px-4 py-3 border-b md:px-[4%] lg:px-[7%] bg-white z-30">
      {/* === Left: Categories Button (Mobile) === */}
      <button
        className="md:hidden flex items-center gap-1 text-sm"
        onClick={onToggleSidebar}
      >
        <i className="fa-solid fa-list"></i>
        <span>Categories</span>
      </button>

      {/* === Logo === */}
      <p className="logo absolute -translate-x-1/2 left-1/2 md:static md:translate-x-0 font-bold text-xl">
        Exclusive
      </p>

      {/* === Desktop Nav === */}
      <ul className="list-option hidden md:flex space-x-5 lg:space-x-8 text-sm lg:text-base">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>SignUp</li>
      </ul>

      {/* === Right Side === */}
      <div className="right-container hidden md:flex items-center gap-2">
        <div className="search-box flex items-center w-64 border rounded-lg overflow-hidden">
          <input
            className="search-input flex-1 px-2 py-1 text-sm"
            type="text"
            placeholder="What are you looking for?"
          />
          <i className="fa-solid fa-magnifying-glass px-3 text-gray-500"></i>
        </div>

        <div className="cart-icon flex items-center gap-3">
          <i className="fa-regular fa-heart text-lg"></i>
          <div className="relative">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* === Mobile Menu Toggle === */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fa-solid fa-bars text-xl"></i>
      </button>

      {/* === Mobile Menu === */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 text-white p-3 flex flex-col gap-3 md:hidden z-20">
          <ul className="flex flex-col gap-2 text-sm">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>SignUp</li>
          </ul>

          <div className="flex items-center gap-2">
            <div className="relative flex items-center w-full">
              <input
                className="search-input w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
                type="text"
                placeholder="Search..."
              />
              <i className="fa-solid fa-magnifying-glass absolute right-3 text-gray-300"></i>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
