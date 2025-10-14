import React from "react";

function Login() {
  return (
    <div className="login-container flex flex-col md:flex-row items-stretch h-[85vh] ">
      {/* === Left Image Section === */}
      <div className="hidden md:flex flex-1 items-center justify-center ">
        <img
          src="login-banner.jpg"
          alt="Login banner"
          className="object-cover w-full md:min-h-[50vh] md:max-h-[60vh] lg:h-[80vh]"
        />
      </div>

      {/* === Right Form Section === */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Log in to <span className="text-red-500">Exclusive</span>
          </h3>
          <p className="text-sm text-gray-500 mb-8">Enter your details below</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-gray-300 focus:border-black outline-none py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-300 focus:border-black outline-none py-2 text-sm"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition"
              >
                Log In
              </button>

              <button
                type="button"
                className="text-red-500 hover:underline text-sm font-medium"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
