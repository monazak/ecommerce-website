import React from "react";

function Checkout() {
  return (
    <div className="checkout-container px-4 py-10 md:px-[4%] lg:px-[9%] min-h-screen">

      <ul className="flex flex-wrap items-center gap-1 text-sm text-gray-500 mb-10">
        <li>
          <a href="#" className="hover:text-red-500 transition">Account</a> /
        </li>
        <li>
          <a href="#" className="hover:text-red-500 transition">My Account</a> /
        </li>
        <li>
          <a href="#" className="hover:text-red-500 transition">Product</a> /
        </li>
        <li>
          <a href="#" className="hover:text-red-500 transition">View Cart</a> /
        </li>
        <li className="text-gray-900 font-medium">Checkout</li>
      </ul>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

        <div className="billing-container rounded-lg shadow-md p-6 flex-1">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Billing Details</h3>

          <form className="flex flex-col gap-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-gray-700 mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="block text-gray-700 mb-1">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Town / City */}
            <div>
              <label className="block text-gray-700 mb-1">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border rounded-md px-4 py-2 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
              />
            </div>


            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" id="save" className="mt-1 accent-red-500" />
              <label htmlFor="save" className="text-sm text-gray-700">
                Save this information for faster checkout next time
              </label>
            </div>
          </form>
        </div>


        <div className="place-order-container flex-1 rounded-lg shadow-md p-6">

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="productsImages/habd.png"
                  alt=""
                  className="h-16 w-16 object-cover rounded"
                />
                <p className="font-medium text-gray-800">LCD Monitor</p>
              </div>
              <p className="font-semibold text-gray-900">$650</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="productsImages/habd.png"
                  alt=""
                  className="h-16 w-16 object-cover rounded"
                />
                <p className="font-medium text-gray-800">Gaming Headset</p>
              </div>
              <p className="font-semibold text-gray-900">$500</p>
            </div>
          </div>


          <div className="mt-6 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>$1150</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-gray-900">
              <p>Total:</p>
              <p>$1150</p>
            </div>
          </div>


          <div className="mt-6 flex flex-wrap justify-between items-start ">
            <div className="flex-1 flex flex-col gap-3">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  className="accent-red-500"
                />
                Bank
              </label>

              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  className="accent-red-500"
                />
                Cash on Delivery
              </label>
            </div>

            <div className="flex-1 flex flex-wrap justify-end gap-3">
              <img src="payment/bKash.png" alt="" className="h-8 w-10" />
              <img src="payment/visa.png" alt="" className="h-8 w-10" />
              <img src="payment/masterCard.png" alt="" className="h-8 w-10" />
              <img src="payment/4th.png" alt="" className="h-8 w-10" />
            </div>
          </div>


          <div className="flex flex-col sm:flex-row gap-2 mt-8">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 border  rounded-md px-4 py-2 h-10 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-400 focus:outline-none"
            />
            <button className="px-2 py-2 h-10  bg-red-500 text-white rounded-md hover:bg-red-600 transition">
              Apply Coupon
            </button>
          </div>


          <div className="flex justify-start mt-8">
            <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-md transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
