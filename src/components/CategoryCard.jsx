import React from 'react';

function CategoryCard({ name, icon }) {
  return (
    <div className="flex-1 flex flex-col items-center border justify-center bg-white rounded-xl shadow hover:shadow-md hover:bg-red-500 hover:text-white transition  h-[150px] w-[200px]">
      <i className={`${icon} text-4xl mb-3`} /> {/* Bigger icon */}
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}

export default CategoryCard;
