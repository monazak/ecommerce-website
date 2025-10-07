import React from "react";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import FeatureCard from "./FeatureCard";
function ItemsContainer({ horizontal = true, items = [], CardComponent }) {
  let containerClasses ="flex gap-10 justify-start px-4 py-3 md:px-[4%] lg:px-[7%]"
  if (CardComponent === ProductCard) {
    
    containerClasses += horizontal
      ? " overflow-x-auto"
      : " flex-wrap justify-center";
  } else if (CardComponent === CategoryCard ) {
    containerClasses = "flex flex-wrap justify-center gap-4 w-full px-4 py-3 md:px-[4%] lg:px-[7%]";
  } else if (CardComponent === FeatureCard) {
    containerClasses = "flex flex-wrap justify-center gap-8 py-6";
  }
  return (
    <div
      
      className={containerClasses}
    >
      {items.map((item) => (
        <div key={item.id} className="flex-shrink-0">
          <CardComponent {...item} />
        </div>
      ))}
    </div>
  );
}

export default ItemsContainer;
