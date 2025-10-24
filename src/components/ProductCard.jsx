import { useState } from "react";

function ProductCard({
 image,
  price,
  oldPrice,
  rating = 0,
  reviews = 0,
  saleRatio,
  colors,
  rateFlex = true,
  colorsSection = false,
  newArrival,
  title,
  category,

}) {
  const rate = rating?.rate || 0;
  const count = rating?.count || 0;
  const [expanded, setExpanded] = useState(false);

  console.log(category)

  const renderStars = (rate) => {
  const rating = Number(rate) || 0; // Ensure it's always a number
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={`full-${i}`} src="/star-full.png" alt="star" className="w-4 h-4" />);
  }
  if (hasHalfStar) {
    stars.push(<img key={`half`} src="/star-half.png" alt="half star" className="w-4 h-4" />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={`empty-${i}`} src="/star-empty.png" alt="empty star" className="w-4 h-4" />);
  }

  return stars;
};


  return (
    <div className="product-card w-72 md:w-80 border  bg-white shadow-lg rounded overflow-hidden relative group">
      <div className="bg-gray-100 flex justify-center items-center relative w-full h-80">
        {saleRatio && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            -{saleRatio}%
          </div>
        )}
        {newArrival && (
          <div className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1 rounded z-10">
            new
          </div>
        )}

        <div className="image-container w-56 h-56">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full flex justify-center items-center rounded"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-25 flex justify-center items-end opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-black text-white px-4 py-3 rounded w-full">
            Add to Cart
          </button>
        </div>

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button className="flex items-center justify-center bg-white p-1 h-8 w-8 rounded-full shadow hover:text-red-500">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button className="flex items-center justify-center bg-white p-1 h-8 w-8  rounded-full shadow hover:text-red-500">
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1 h-24">
        <div className="w-full pr-4 cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <h3 className={`text-sm font-medium ${!expanded ? "truncate" : ''}`}>{title}</h3>
        </div>

        {rateFlex &&
          <div className="flex flex-col ">
            <div className="flex justify-betwwen gap-3">
              <span className="text-base font-bold">${price}</span>
              <div className="flex items-center gap-1">
                {renderStars(rate)}
              </div>
              <span className="text-gray-500">({count})</span>
            </div>
            {colorsSection && colors && colors.length > 0 &&

              <div className="flex gap-2 mt-2">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    className={`h-5 w-5 rounded-full border border-gray-300`}
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>

            }
          </div>

        }
        {!rateFlex &&
          <> <div className="flex gap-2 items-center">
            <span className="text-base font-bold">${price}</span>
            {oldPrice && (
              <span className="text-xs line-through text-gray-500">${oldPrice}</span>
            )}
          </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                {renderStars(rating)}
              </div>
              <span className="text-gray-500">({reviews})</span>
            </div></>
        }

      </div>
    </div>
  );
}

export default ProductCard;
