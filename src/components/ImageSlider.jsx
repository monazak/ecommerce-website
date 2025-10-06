import { useState } from "react";
import {sliderSlides} from './data/imageSlider.json'
import Slide from './Slide'

function ImageSlider() {

  const [slide, setSlide] = useState(0);
   return (
    <div className="carousel-container relative w-full ">
      {sliderSlides.map((item, index) => (
        <div
          key={index}
          className={`slide ${slide === index ? "block" : "hidden"} w-full`}
        >

          <Slide item={item}/>

          <div className="indicators flex justify-center mt-3 space-x-2">
            {sliderSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${slide === idx ? "bg-red-600" : "bg-gray-400"}`} 
                onClick={() => setSlide(idx)}
              ></button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

}

export default ImageSlider;

