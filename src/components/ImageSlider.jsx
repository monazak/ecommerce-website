import { useState } from "react";
import {slides} from './data/imageSlider.json'

function SlideDetails({title, subtitle, iconClass,label}) {

  return (
    <div className="details-container flex flex-col justify-center md:justify-center gap-2 md:gap-4 ">
      <div className="icon-text flex items-center gap-3 md:gap-4 ">
        <i className={`${iconClass} text-3xl md:text-5xl`}></i>
        <span>{label}</span>
        <p className="text-base md:text-lg font-medium">{title}</p>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold leading-sung">
        {subtitle}
      </h3>
      <a href="#" className="underline text-white hover:text-gray-300 w-max flex items-center gap-2">
        Shop Now<span><i className="fa-solid fa-arrow-right ml-2"></i></span>
      </a>
    </div>
  );
}

function ImageSlider() {

  const [slide, setSlide] = useState(0);
   return (
    <div className="carousel-container relative w-full">
      {slides.map((item, index) => (
        <div
          key={index}
          className={`slide ${slide === index ? "block" : "hidden"} w-full`}
        >
          <div className="slide-content flex flex-col md:flex-row gap-4 bg-black-800  p-4 md:p-6 items-center">
          
            <div className="slide-left flex-1 text-white flex justify-center md:justify-start">
              <SlideDetails 
                title={item.title}
                subtitle={item.subtitle}
                iconClass={item.icon}
                label={item.label}
              />
            </div>

            <div className="slide-right flex-1 flex justify-center items-center">
              <img
                src={item.src}
                alt={item.alt}
                className="slide-image w-64 md:w-80 h-64 md:h-70 object-cover rounded"
              />
            </div>
          </div>

          <div className="indicators flex justify-center mt-3 space-x-2">
            {slides.map((_, idx) => (
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

