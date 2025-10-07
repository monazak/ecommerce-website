import React, { useState } from "react";

export default function SideBar({ isSidebarOpen, closeSidebar }) {
  const [open, setOpen] = useState({ women: false, men: false });

  return (
    <>
      {/* === Overlay for mobile === */}
{isSidebarOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={closeSidebar}
  ></div>
)}


      {/* === Sidebar itself === */}
<nav
  className={`
    fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
    md:static md:translate-x-0 md:h-auto md:w-[220px] md:shadow-none
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>

        <div className="p-4 md:p-2 overflow-y-auto h-full">
          <ul className="flex flex-col gap-2">
            <li>
              <button
                className="w-full text-left flex justify-between items-center px-2 py-1"
                onClick={() => setOpen((o) => ({ ...o, women: !o.women }))}
              >
                Woman’s Fashion{" "}
                <i
                  className={`fa-solid fa-chevron-down transition-transform duration-200 ${
                    open.women ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>
              {open.women && (
                <ul className="pl-4 text-sm text-gray-600 space-y-1">
                  <li>Dresses</li>
                  <li>Makeup</li>
                </ul>
              )}
            </li>

            <li>
              <button
                className="w-full text-left flex justify-between items-center px-2 py-1"
                onClick={() => setOpen((o) => ({ ...o, men: !o.men }))}
              >
                Men’s Fashion{" "}
                <i
                  className={`fa-solid fa-chevron-down transition-transform duration-200 ${
                    open.men ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>
              {open.men && (
                <ul className="pl-4 text-sm text-gray-600 space-y-1">
                  <li>Shirts</li>
                  <li>Pants</li>
                </ul>
              )}
            </li>

            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        {/* Mobile close button */}
        <button
          onClick={closeSidebar}
          className="md:hidden absolute bottom-4 right-4 text-gray-500 hover:text-black"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </nav>
    </>
  );
}
