import React, { useState, useEffect } from 'react';
import raw from './data/imageSlider.json';
import Slide from './Slide';

const slides = (raw && (raw.sliderSlides || raw.slides)) || [];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center text-gray-200">
        No slides found
      </div>
    );
  }

  return (
    <div className="carousel-container relative  min-h-[350px] md:h-[350px] overflow-hidden bg-black">
      {slides.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          <div className="w-full h-full p-4 box-border  flex justify-center">
            <div className="w-full h-full  rounded-xl flex items-center justify-center ">
              <Slide item={item} />
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === index ? 'bg-red-600 border-2' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


