import React from "react";

function Arrows({ onPrev, onNext }) {
  return (
    <div className="arrows flex gap-2">
      <button
        onClick={onPrev}
        className="p-2 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button
        onClick={onNext}
        className="p-3 bg-gray-200 rounded-full flex items-center justify-center"
      >
        <i className="fa-solid fa-arrow-right"></i>      </button>
    </div>
  );
}

export default Arrows;
