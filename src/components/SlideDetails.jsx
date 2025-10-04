import React from 'react'

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


export default SlideDetails
