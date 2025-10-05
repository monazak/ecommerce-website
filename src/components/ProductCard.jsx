// src/components/ProductCard.jsx
import {useState} from "react";

function ProductCard({
  image,
  name,
  price,
  oldPrice,
  rating = 0, 
  viewers = 0,
  saleRatio=7,
})
 {
const [expanded, setExpanded] = useState(false);
  return (
    <div className="product-card  bg-white shadow-md rounded overflow-hidden relative group">
 
      <div className="relative w-80 h-80 ">
        {saleRatio && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            -{saleRatio}%
          </div>
        )}

        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full flex justify-center items-center"
        />


        <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-black text-white px-4 py-3 rounded w-full">
            Add to Cart
          </button>
        </div>

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="bg-white p-1 rounded-full shadow hover:bg-gray-200">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="bg-white p-1 rounded-full shadow hover:bg-gray-200">
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>

      <div className="p-3 flex flex-col ">

        <div className="w-80 pr-4"  onClick={() => setExpanded(!expanded)}>
          <h3 className={`text-sm font-medium ${!expanded ? "truncate" : ''} `}>{name}</h3>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-base font-bold">${price}</span>
          {oldPrice && (
            <span className="text-xs line-through text-gray-400">${oldPrice}</span>
          )}
        </div>

        <div className="flex text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <img src="/star.png" alt="star" className="w-3 h-3" /> {/* first star */}
            <span>{rating}</span>
          </div>
          <span>{viewers} viewers</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
