import React from "react";
import ItemsContainer from "../components/ItemsContainer";
import SectionName from "../components/SectionName";
import { products } from "../components/data/products.json";
import ProductCard from "../components/ProductCard";

function ProductDetailes() {
  return (
    <div className="product-detailes-page-container flex flex-col gap-10 px-4 py-10 md:px-[4%] lg:px-[9%] min-h-screen ">
      {/* Breadcrumb */}
      <ul className=" mt-10 flex flex-wrap items-center gap-1 text-sm text-gray-500 mb-10">
        <li>
          <a href="#" className="hover:text-red-500 transition">Account</a> /
        </li>
        <li>
          <a href="#" className="hover:text-red-500 transition">Gaming</a> /
        </li>
        <li className="text-gray-900 font-medium">Havic HV G-92 Gamepad</li>
      </ul>



      <div className=" flex flex-col lg:flex-row gap-10 lg:items-stretch ">

        <div className="flex lg:flex-col justify-between order-2 lg:order-1  ">
          {["/HV-G-92/HV-2.png", "/HV-G-92/HV-3.png", "/HV-G-92/HV-4.png", "/HV-G-92/HV-5.png"].map((src, i) => (
            <div
              key={i}
              className="w-20 h-20 md:w-32 md:h-32 border rounded-lg overflow-hidden  bg-gray-50 hover:shadow transition"
            >
              <img src={src} alt={`HV-G-92-${i}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex justify-center items-center rounded-lg shadow-sm order-1 lg:order-2  bg-gray-50">
          <img
            src="/HV-G-92/HV-1.png"
            alt="Havic HV G-92 Gamepad"
            className="w-[80%] max-w-md object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4 order-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Havic HV G-92 Gamepad
          </h2>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="flex text-yellow-400">★★★★★</div>
            <p>(150 Reviews)</p>
            <p className="text-green-600 font-medium">In Stock</p>
          </div>

          <p className="text-2xl font-semibold ">$192.00</p>

          <p className="text-gray-600 leading-relaxed">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble-free install and mess-free removal.
          </p>

          <hr className="my-3" />

          {/* Colors */}
          <div className="flex items-center gap-3">
            <p className="font-medium text-gray-700">Colours:</p>
            <div className="flex gap-2">
              <span className="h-5 w-5 rounded-full bg-blue-200 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-red-400 transition"></span>
              <span className="h-5 w-5 rounded-full bg-red-400 border border-gray-300 cursor-pointer hover:ring-2 hover:ring-red-400 transition"></span>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-3">
            <p className="font-medium text-gray-700">Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="py-1 w-8 h-8 border rounded-md text-sm hover:bg-red-500 hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex flex-wrap gap-4 mt-3 items-center">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-200 border-r">-</button>
              <p className="px-4 font-medium">2</p>
              <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-r-md transition">
                +
              </button>
            </div>

            <button className="flex-1 md:flex-none bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition">
              Buy Now
            </button>

            <button className="border p-2 rounded-md hover:bg-gray-100 transition">
              <i className="fa-regular fa-heart "></i>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 border rounded-lg bg-white shadow-sm divide-y divide-gray-100">
            <div className="flex items-center gap-3 p-4">
              <i className="fa-solid fa-truck-fast text-2xl hover:text-red-500"></i>
              <div>
                <p className="font-medium text-gray-900 ">Free Delivery</p>
                <p className="text-sm text-gray-600 underline hover:text-red-500 cursor-pointer">
                  Enter your postal code for delivery availability.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4">
    <i className="fa-solid fa-rotate-left text-2xl mt-1 hover:text-red-500 "></i>
              <div>
                <p className="font-medium text-gray-900 r">Return Delivery</p>
                <p className="text-sm text-gray-600">
                  Free 30 Days Delivery Returns.{" "}
                  <a href="#" className="hover:text-red-500 underline cursor-pointe">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-24 flex flex-col gap-16">
        <SectionName name="Related Items"  />
        <ItemsContainer items={products} CardComponent={ProductCard} />
      </div>

    </div>
  );
}

export default ProductDetailes;
