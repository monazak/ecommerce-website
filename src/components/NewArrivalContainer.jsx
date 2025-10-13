// components/NewArrivalContainer.jsx
import React from "react";
import NewArrivalSlide from "./NewArrivalSlide";
import { newArrivalSlides } from "./data/imageSlider.json"; // adjust path

function NewArrivalContainer() {
  const mainProduct = newArrivalSlides[0]; // large PlayStation-like
  const topRightProduct = newArrivalSlides[1]; // Women's collection
  const smallProducts = [newArrivalSlides[2], newArrivalSlides[3]]; // speakers + perfume

  return (
    <div className="flex flex-wrap gap-7 justify-center w-full  p-4  px-4 py-3 md:px-[4%] lg:px-[9%] ">
      {/* Left Large Section */}
      <div className="w-full sm:w-[680px] bg-black">
        <NewArrivalSlide item={mainProduct} height="h-60 lg:h-[430px]" />
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-[680px]">
        {/* Top Medium Card */}
        <div className="mb-7">
          <NewArrivalSlide item={topRightProduct} rightImage='true' height="h-60 sm:h-[200px] bg-black" />
        </div>

        {/* Bottom Two Smaller Cards */}
        <div className="flex flex-wrap gap-7">
          {smallProducts.map((item, index) => (
            <div key={index} className="w-full  sm:w-[325px] bg-black">
              <NewArrivalSlide item={item} height="h-[200px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrivalContainer;
