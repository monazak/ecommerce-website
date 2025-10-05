import React from "react";
import ProductCard from "./ProductCard";

function ProductsContainer({ horizontal = true, products = [] }) {
  return (
    <div
      className={`products-container flex ${
        horizontal ? "overflow-x-auto" : "flex-wrap justify-center"
      } gap-10 justify-start px-4 py-3 md:px-[4%] lg:px-[7%]`}
    >
      {products.map((product) => (
        <div key={product.id} className="flex-shrink-0">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsContainer;
