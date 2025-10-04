import React, { useState } from "react";
import "./SideBar.css"; // Keep your custom styles for non-responsive parts

function SideBar({isSidebarOpen, closeSidebar}) {
  const [open, setOpen] = useState({ women: false, men: false });

  function toggle(category) {
    setOpen((prev) => ({ ...prev, [category]: !prev[category] }));
  }

  return (
    <>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 z-50 transform transition-transform duration-300
          md:relative md:translate-x-0 md:flex md:flex-col md:w-auto
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="sidebar-menu flex flex-col gap-3 px-2">

          <li className="relative">
            <button
              onClick={() => toggle("women")}
              className="sidebar-btn flex justify-between items-center w-full pr-6"
            >
              Woman’s Fashion
              <i
                className={`fa-solid fa-chevron-down transition-transform ${
                  open.women ? "rotate-0" : "-rotate-90"
                }`}
              ></i>
            </button>
            <ul className={`submenu ${open.women ? "show" : ""}`}>
              <li>Dresses</li>
              <li>Makeup</li>
            </ul>
          </li>

          <li className="relative">
            <button
              onClick={() => toggle("men")}
              className="sidebar-btn flex justify-between items-center w-full pr-6"
            >
              Men’s Fashion
              <i
                className={`fa-solid fa-chevron-down transition-transform ${
                  open.men ? "rotate-0" : "-rotate-90"
                }`}
              ></i>
            </button>
            <ul className={`submenu ${open.men ? "show" : ""}`}>
              <li>Shirts</li>
              <li>Pants</li>
            </ul>
          </li>

          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
