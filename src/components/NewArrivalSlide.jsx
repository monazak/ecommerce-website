// components/NewArrivalSlide.jsx
import React from "react";

function NewArrivalSlide({ item, height = "h-[200px]" , rightImage}) {
  return (
    <a
      href={item.link || "#"}
      className={`relative p-2 overflow-hidden shadow-lg group block flex ${
      rightImage ? "justify-end" : "justify-center"
    } items-center ${height}`}
    >
   
      {/* Background image */}

      <img
        src={item.src}
        alt={item.alt || item.title}
className=" h-full transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text overlay */}
      <div className="absolute bottom-5 left-6 text-white">
        <h4 className="text-lg sm:text-xl font-bold">{item.title}</h4>
        {item.description && (
          <p className="w-[80%] text-xs sm:text-sm mt-1 text-gray-200">
            {item.description}
          </p>
        )}
        <button className="mt-2 underline font-medium hover:text-gray-300 transition">
          Shop Now
        </button>
      </div>
    </a>
  );
}

export default NewArrivalSlide;
