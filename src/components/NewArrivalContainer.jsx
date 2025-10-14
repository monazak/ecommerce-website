// components/NewArrivalContainer.jsx
import React from "react";
import NewArrivalSlide from "./NewArrivalSlide";
import { newArrivalSlides } from "./data/imageSlider.json";

function NewArrivalContainer() {
  const mainProduct = newArrivalSlides[0];
  const topRightProduct = newArrivalSlides[1];
  const smallProducts = [newArrivalSlides[2], newArrivalSlides[3]];

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center w-full px-4 py-6 md:px-8 lg:px-[9%]">

      <div className="flex-1 min-w-[300px] lg:min-w-[45%] bg-black">
        <NewArrivalSlide item={mainProduct} height="h-60 sm:h-72 md:h-[350px] lg:h-[430px]" />
      </div>


      <div className="flex-1 min-w-[300px] lg:min-w-[45%] flex flex-col gap-6">

        <div className="bg-black">
          <NewArrivalSlide
            item={topRightProduct}
            rightImage="true"
            height="h-60 sm:h-64 md:h-[200px] lg:h-[230px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6">
          {smallProducts.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[150px] bg-black"
            >
              <NewArrivalSlide item={item} height="h-48 sm:h-[200px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrivalContainer;
