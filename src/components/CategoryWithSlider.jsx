// src/components/CategoryWithSlider.jsx
import React from "react";
import SideBar from './SideBar'
import ImageSlider from './ImageSlider'
export default function CategoryWithSlider( {isSidebarOpen,closeSidebar}) {
  return (
    <div className="category-with-slider px-4 py-3 md:px-[4%] lg:px-[7%] mt-7 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="side-bar-container md:col-span-1 md:bg-gray-100 md:p-4 border-r ">
          <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>
        

        <main className="col-span-1   md:col-span-3 bg-black p-4  flex flex-col md:flex-row gap-4"> 
          <ImageSlider/>
        </main>

      </div>
    </div>
  );
}
