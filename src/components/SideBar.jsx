import React, { useState } from "react";
 
export default function SideBar({ isSidebarOpen, closeSidebar }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const categories = [
    {
      title: "Women’s Fashion",
      key: "women",
      items: ["Dresses", "Makeup"],
    },
    {
      title: "Men’s Fashion",
      key: "men",
      items: ["Shirts", "Pants"],
    },
    { title: "Electronics" },
    { title: "Home & Lifestyle" },
    { title: "Medicine" },
    { title: "Sports & Outdoor" },
    { title: "Baby’s & Toys" },
    { title: "Groceries & Pets" },
    { title: "Health & Beauty" },
  ];

  return (
    <>
      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}


      <nav
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          md:static md:translate-x-0 md:h-auto md:w-[220px] md:shadow-none
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 md:p-0  h-auto ">
          <ul className="flex flex-col gap-2  text-gray-800">
            {categories.map((category) => (
              <li key={category.title}>
      
                <button
                  className="w-full text-left flex justify-between items-center px-0 py-1 font-medium hover:bg-gray-100 rounded-md transition"
                  onClick={() => category.items && toggleSection(category.key)}
                >
                  <span><a href="">{category.title}</a></span>
                  {category.items && (
                    <i
                      className={`fa-solid fa-chevron-down text-sm transition-transform duration-200 ${
                        openSection === category.key ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  )}
                </button>

         
                {category.items && openSection === category.key && (
                  <ul className="pl-6 mt-1 space-y-1 text-sm text-gray-600 animate-fadeIn">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="hover:text-black cursor-pointer transition"
                      >
                        <a href="">{item}</a>
                      
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

  
        <button
          onClick={closeSidebar}
          className="md:hidden absolute bottom-4 right-4 text-gray-500 hover:text-black transition"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </nav>
    </>
  );
}
