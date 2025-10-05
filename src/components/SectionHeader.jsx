import React from "react";
import Countdown from "./Countdown";
import Arrows from "./Arrows"
import SectionName from "./SectionName";
import ProductCard from './ProductCard'




function SectionHeader({
  title,           
  showTimer = true,
  timerData=  new Date(2025, 9, 10, 23, 59, 59),
  showArrows = true, 
  onPrev,           
  onNext            
}) {
  return (
    <>
    <div className="section-header flex justify-between gap-10 items-center mb-4 px-4 py-1 md:px-[4%] lg:px-[7%]">
        

        <h2 className="text-xl font-bold">{title}</h2>

       {showTimer && timerData && (
          <div className="flex-1 gap-2">
              <Countdown targetDate={timerData} />
          </div>
        )}

      {showArrows && (<Arrows onPrev={onPrev} onNext={onNext} /> )}

    </div>
      
    </>
  );
}
export default SectionHeader;
