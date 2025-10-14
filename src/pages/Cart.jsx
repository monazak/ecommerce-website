import React from "react";

function Cart() {
  return (
    <div className="cart-container px-4 py-8 md:px-[4%] lg:px-[9%] min-h-screen">
      {/* === Breadcrumb === */}
      <p className="text-gray-600 text-sm mb-6 flex">
        <a href=""> Home / </a>  <span className="text-gray-900 font-medium"><a href=""> Cart </a></span>
      </p>

      {/* === Cart Table === */}
      <div className="overflow-x-auto bg-white rounded-lg ">
        <table className="w-full text-left min-w-[600px] border-separate border-spacing-y-3 ">
          <thead className="border ">
            <tr className="text-gray-700 text-sm md:text-base border shadow">
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Quantity</th>
              <th className="py-3 px-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* === Product 1 === */}
            <tr className="border-b hover:bg-gray-50 transition border shadow">
              <td className="py-4 px-4 flex items-center gap-3">
                <img
                  src="/productsImages/lcd.png"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="font-medium text-gray-800">LCD Monitor</p>
              </td>
              <td className="py-4 px-4 text-gray-600">$650</td>
              <td className="py-4 px-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-16 border rounded-md px-2 py-1 text-center focus:outline-none focus:ring-1 focus:ring-red-400"
                />
              </td>
              <td className="py-4 px-4 font-semibold text-gray-900">$650</td>
            </tr>

            {/* === Product 2 === */}
            <tr className="border-b hover:bg-gray-50 transition border shadow">
              <td className="py-4 px-4 flex items-center gap-3">
                <img
                  src="/productsImages/habd.png"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="font-medium text-gray-800">Gaming Headset</p>
              </td>
              <td className="py-4 px-4 text-gray-600">$500</td>
              <td className="py-4 px-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-16 border rounded-md px-2 py-1 text-center focus:outline-none focus:ring-1 focus:ring-red-400"
                />
              </td>
              <td className="py-4 px-4 font-semibold text-gray-900">$1000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* === Buttons Row === */}
      <div className="flex  flex-row justify-between items-center gap-4 mt-6">
        <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition">
          Return to Shop
        </button>
        <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>

      {/* === Coupon + Total Section === */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10">
        {/* Coupon Code */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-1 h-10 focus:ring-red-400"
          />
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 h-10 transition">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/3">
          <h6 className="text-lg font-semibold mb-4 text-gray-900">
            Cart Total
          </h6>

          <div className="flex justify-between text-gray-700 mb-3">
            <p>Subtotal:</p>
            <p>$1650</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-700 my-3">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-900 font-semibold my-3">
            <p>Total:</p>
            <p>$1650</p>
          </div>

          <div className="flex justify-center mt-5">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
