import { useState, useEffect } from "react";

function Countdown({ targetDate, variant = "circle" }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  function calculateTimeLeft(date) {
    const difference = +new Date(date) - +new Date();
    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      mins: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      secs: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.mins },
    { label: "Secs", value: timeLeft.secs },
  ];

  return (
    <div className="flex items-center  gap-2 md:gap-3">
      {items.map((item, idx) => (
        <div
          key={item.label}
          className={`flex flex-col items-center ${
            variant === "minimal" ? "relative" : ""
          }`}
        >

          {variant === "minimal" && (
            <>
              <span className="text-[10px] md:text-xs text-gray-600 mb-1">
                {item.label}
              </span>
              <div className="text-black font-bold text-sm md:text-lg">
                {String(item.value).padStart(2, "0")}
              </div>

              {idx < items.length - 1 && (
                <span className="text-red-500 text-lg font-bold mx-2 absolute right-[-14px] top-[40%]">
                  : 
                </span>
              )}
            </>
          )}


          {variant === "circle" && (
            <div className="bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full flex flex-col items-center justify-center font-bold text-[10px] md:text-xs leading-tight">
              <span className="text-sm md:text-base">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[9px] md:text-[10px] font-normal">
                {item.label}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Countdown;
