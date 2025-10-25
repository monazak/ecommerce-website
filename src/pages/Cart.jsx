import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <div className="cart-container px-4 py-8 md:px-[4%] lg:px-[9%] min-h-screen">
      <p className="text-gray-600 text-sm mb-6 flex hover:text-red-500">
        <Link to="/">Home /</Link>
        <span className="text-gray-900 font-medium ml-1">Cart</span>
      </p>

      <div className="overflow-x-auto bg-white rounded-lg">
        {cart.length === 0 ? (
          <p className="text-center py-10 text-gray-600 text-lg">Your cart is empty 😔</p>
        ) : (
          <table className="w-full text-left min-w-[600px] border-separate border-spacing-y-3">
            <thead className="border">
              <tr className="text-gray-700 text-sm md:text-base border shadow">
                <th className="py-3 px-4">Product</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Quantity</th>
                <th className="py-3 px-4">Subtotal</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition border shadow">
                  <td className="py-4 px-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="font-medium text-gray-800">{item.name}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-600">${item.price}</td>
                  <td className="py-4 px-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border rounded-md px-2 py-1 text-center focus:outline-none focus:ring-1 focus:ring-red-400"
                    />
                    
                  </td>
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    ${item.price * item.quantity}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {cart.length > 0 && (
        <div className="flex justify-end mt-8">
          <button
            onClick={clearCart}
            className="px-6 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition"
          >
            Clear Cart
          </button>
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3 ml-auto">
          <h6 className="text-lg font-semibold mb-4 text-gray-900">Cart Total</h6>
          <div className="flex justify-between text-gray-700 mb-3">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-700 my-3">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-900 font-semibold my-3">
            <p>Total:</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
