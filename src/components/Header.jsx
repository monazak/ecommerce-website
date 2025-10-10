import { useState } from "react";

function Header({ cartCount = 0, onToggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "SignUp", path: "/signup" },
];


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

      {/* === Right Side (Cart + Search) === */}
      <div className="right-container flex items-center gap-2">
        {/* Search only visible on md+ */}
        <div className="search-box hidden md:flex items-center w-64 border rounded-lg overflow-hidden">
          <input
            className="search-input flex-1 px-2 py-1 text-sm"
            type="text"
            placeholder="What are you looking for?"
          />
          <i className="fa-solid fa-magnifying-glass px-3 text-gray-500"></i>
        </div>

        {/* Cart icons always visible */}
        <div className="cart-icon flex items-center gap-3">
          <i className="fa-regular fa-heart text-lg"></i>
          <div className="relative">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>

        {/* Mobile menu button (hamburger) */}
        <button
          className="md:hidden ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      {/* === Mobile Menu === */}
<div
  className={`absolute top-full left-0 w-full bg-gray-300 border-b text-white flex flex-col gap-3 md:hidden z-20 transition-all duration-300 ease-in-out
    ${isMenuOpen ? "opacity-100 translate-y-0 p-3 max-h-60" : "opacity-0 -translate-y-5 max-h-0 overflow-hidden"}
  `}
>
  <ul className="flex flex-col gap-2 text-sm">
    {navItems.map((item) => (
      <li
        key={item.name}
        className={`px-3 py-2 rounded transition cursor-pointer
          hover:bg-gray-200 hover:text-red-500
          ${window.location.pathname === item.path ? "bg-gray-200 text-red-500 font-semibold" : ""}`}
      >
        {item.name}
      </li>
    ))}
  </ul>

  <div className="flex items-center gap-2">
    <div className="relative flex items-center w-full">
      <input
        className="search-input w-full px-3 py-2 rounded bg-gray-200 text-white placeholder-gray-400"
        type="text"
        placeholder="What Are You Looking For?..."
      />
      <i className="fa-solid fa-magnifying-glass absolute right-3 text-gray-300"></i>
    </div>
  </div>
</div>

    </header>
  );
}

export default Header;
