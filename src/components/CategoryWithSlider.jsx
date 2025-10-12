import React from "react";
import SideBar from "./SideBar";
import ImageSlider from "./ImageSlider";

export default function CategoryWithSlider({ isSidebarOpen, closeSidebar }) {
  return (
    <div className="category-with-slider md:px-[4%] lg:px-[7%] mt-7 md:mt-0">
      <div className="flex gap-5 relative ">

        <div className="border-r py-4 ">
        <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        </div>

        <main className="flex-1 py-4 ">
          <ImageSlider />
        </main>
      </div>
    </div>
  );
}
