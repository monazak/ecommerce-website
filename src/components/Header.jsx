import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Header({ onToggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" }, 
    { name: "login", path: "/Login" },
  ];

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "2px solid black" : "none",
      paddingBottom: isActive ? "2px" : "0",
    };
  }

  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);



  return (
    <header className="sticky top-0 header-container relative flex justify-between items-center px-4 py-3 border-b md:px-[4%] lg:px-[9%] bg-white z-40">

      <div className="flex gap-5">
        <button
          className="md:hidden flex items-center gap-1 text-sm hover:text-red-500"
          onClick={onToggleSidebar}>
          <i className="fa-solid fa-circle-notch " ></i>
        </button>


        <p className="logo  md:static md:translate-x-0 font-bold text-xl cursor-pointer">
         <Link to="/">Exclusive</Link> 
        </p>
      </div>



      <ul className="list-option hidden lg:flex space-x-5 lg:space-x-8 text-sm lg:text-base">
        <li><NavLink to="/" style={navLinkStyle}>Home</NavLink></li>
        <li><NavLink to="/Contact" style={navLinkStyle}>Contact</NavLink></li>
        <li><NavLink to="/About" style={navLinkStyle}>About</NavLink></li>
        <li><NavLink to="/Login" style={navLinkStyle}>Login</NavLink></li>
      </ul>


      <div className="right-container flex items-center gap-2">

        <div className="search-box hidden md:flex items-center w-64 border rounded-lg overflow-hidden">
          <input
            className="search-input flex-1 px-2 py-2 text-sm focus:outline-none"
            type="text"
            placeholder="What are you looking for?"
          />
          <i className="fa-solid fa-magnifying-glass pr-2 text-gray-500"></i>
        </div>


        <div className="cart-icon flex items-center gap-3">
          <Link to='/Favorite'>
            <i className="fa-regular fa-heart text-lg hover:text-red-500"></i>
          </Link>
          <div className="relative">
            <Link to ='/Cart'>
              <i className="fa-solid fa-cart-shopping text-lg hover:text-red-500 "></i>
            </Link>
            <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>


        <button
          className="lg:hidden ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars text-xl hover:text-red-500"></i>
        </button>
      </div>


      <div
        className={`absolute top-full w-full left-0 md:right-[4%] md:left-auto md:w-[200px] bg-black border text-white flex flex-col gap-3 lg:hidden z-50 transition-all duration-300 ease-in-out
    ${isMenuOpen ? "opacity-100 translate-y-0 p-3 max-h-60" : "opacity-0 -translate-y-5 max-h-0 overflow-hidden"}
  `}
      > 
      <ul className="flex flex-col gap-2 text-sm">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded transition cursor-pointer 
                ${isActive 
                  ? "bg-white text-red-500 font-semibold border border-red-500"
                  : "bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

        <div className=" md:hidden flex items-center gap-2">
          <div className="relative flex items-center w-full">
            <input
              className="search-input pr-7 w-full px-3 py-1.5 rounded bg-white text-gray-500 text-[14px] md:bg-gray-200 placeholder-gray-400 placeholder:text-[14px] focus:outline-none "
              type="text"
              placeholder="What Are You Looking For?..."
            />
            <i className="fa-solid fa-magnifying-glass absolute right-2 text-gray-300"></i>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;
