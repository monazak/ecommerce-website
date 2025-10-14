import React from "react";
import Countdown from "./Countdown";
import Arrows from "./Arrows"
import SectionName from "./SectionName";
import ProductCard from './ProductCard'
import Button from "./Button";


function SectionHeader({
  title,
  showTimer = true,
  timerData = new Date(2025, 25, 10, 23, 59, 59),
  showArrows = true,
  onPrev,
  onNext,
  headerButton,
  buttonText,
  variant,
}) {
  return (
    <>
      <div className="section-header flex justify-between gap-3 md:gap-20 items-end mb-4 px-4 py-1 md:px-[4%] lg:px-[9%]">


        <h2 className=" text-lg md:text-2xl  font-bold">{title}</h2>

        {showTimer && timerData && (
          <div className="flex-1  ">
            <Countdown targetDate={timerData} variant={variant} />
          </div>
        )}

        {headerButton && (<Button text={buttonText} />)}
        {showArrows && (<Arrows onPrev={onPrev} onNext={onNext} />)}

      </div>

    </>
  );
}
export default SectionHeader;
