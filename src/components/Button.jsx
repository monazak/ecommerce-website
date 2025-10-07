import React from 'react'

function Button({text, color="red"}) {
const colorClasses = {
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-500 hover:bg-blue-600",
};
  return (
    <div>
    <button className={`px-4 py-2 text-white rounded ${colorClasses[color] || "bg-gray-500"}`}>
        {text}
    </button>
    </div>
  )
}

export default Button;
