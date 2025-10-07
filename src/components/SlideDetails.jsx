import React from "react";
import Countdown from "./Countdown";
import Button from "./Button";

function SlideDetails({ title,label, subtitle, iconClass, countdown, button,link, description  }) {
  return (
    <div className="details-container flex flex-col justify-center gap-3 md:gap-4 text-center md:text-left">
      {/* Top Row: Icon + Label */}
      <div className="icon-text flex items-center justify-center md:justify-start gap-2 md:gap-3">
        {iconClass && <i className={`${iconClass} text-2xl md:text-4xl`}></i>}
        <span className="text-lg md:text-xl font-semibold">{label}</span>
      </div>

      {/* Subtitle / Main Heading */}
      {subtitle && (
        <h3 className="text-2xl md:text-3xl font-bold leading-snug">{subtitle}</h3>
      )}

      {/* Optional Countdown */}
      {countdown && (
        <div className="text-sm md:text-base text-gray-400">
          <span className="font-semibold text-white"><Countdown targetDate={new Date(2025, 9, 10, 23, 59, 59)}/></span>
        </div>
      )}
      {link && <a href="#" className="underline text-white hover:text-gray-300 w-max flex items-center gap-2"> Shop Now<span><i className="fa-solid fa-arrow-right ml-2"></i></span> </a>}

      {/* CTA Button */}
      {button && (
          <Button text={button} color="green"/>
      )}
    </div>
  );
}

export default SlideDetails;
