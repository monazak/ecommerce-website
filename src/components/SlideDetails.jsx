import React from "react";
import Countdown from "./Countdown";
import Button from "./Button";

function SlideDetails({
  title,
  label,
  subtitle,
  iconClass,
  countdown,
  button,
  link,
  description,
}) {
  return (
    <div className="details-container flex flex-col justify-center gap-1 md:gap-3 text-white pt-4">
      {/* === Icon + Label === */}
      {(iconClass || label) && (
        <div className="icon-text flex items-center justify-center  md:justify-start gap-3">
          {iconClass && (
            <i
              className={`${iconClass} text-2xl md:text-3xl  drop-shadow-md`}
            ></i>
          )}
          {label && (
            <span className="text-lg md:text-base tracking-wide uppercase">
              {label}
            </span>
          )}
        </div>
      )}

      {/* === Main title/subtitle === */}
      {subtitle && (
        <h3 className="text-1xl m-auto md:m-0 md:text-5xl font-extrabold leading-snug tracking-tight max-w-md">
          {subtitle}
        </h3>
      )}

      {/* === Description (optional) === */}
      {description && (
        <p className="text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
          {description}
        </p>
      )}

      {/* === Countdown (optional) === */}
      {countdown && (
        <div className="m-auto md:m-0 text-sm md:text-base font-semibold text-gray-200 bg-gray-800/40 px-4 py-2 rounded-lg w-fit">
          <Countdown targetDate={new Date(2025, 9, 19, 23, 59, 59)} />
        </div>
      )}

      {/* === Link / CTA === */}
      {link && (
        <a
          href="#"
          className="flex  items-center justify-center md:justify-start gap-2 mt-2 text-white hover:text-red-400 transition-colors"
        >
          <span className="underline underline-offset-2 font-medium">
            {link || "Shop Now"}
          </span>
          <i className="fa-solid fa-arrow-right text-sm"></i>
        </a>
      )}

      {/* === Button (optional) === */}
      {button && (
        <div className="mt-3 m-auto md:m-0">
          <Button text={button} color="green" />
        </div>
      )}
    </div>
  );
}

export default SlideDetails;
