import React from "react";
import ProductCard from "./ProductCard";
import CategoryCard from "./CategoryCard";
import FeatureCard from "./FeatureCard";

function ItemsContainer({
  horizontal = true,
  items = [],
  items2 = [],
  CardComponent,
  rateFlex,
  colorsSection,
}) {
  let baseClasses = "";
  let rowClasses = "flex gap-10 justify-start";


  if (CardComponent === ProductCard || CardComponent === CategoryCard) {
    rowClasses += horizontal
      ? " overflow-x-auto no-scrollbar "
      : " flex-wrap justify-center";
  } else if (CardComponent === FeatureCard) {
    rowClasses = "flex flex-wrap justify-center gap-8 py-6";
  }

  return (
    <div className={`flex flex-col gap-10 ${baseClasses}`}>

      <div className={rowClasses}>
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <CardComponent
              {...item}
              rateFlex={rateFlex}
              colorsSection={colorsSection}
            />
          </div>
        ))}
      </div>


      {Array.isArray(items2) && items2.length > 0 && (
        <div className={rowClasses}>
          {items2.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <CardComponent
                {...item}
                rateFlex={rateFlex}
                colorsSection={colorsSection}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemsContainer;
