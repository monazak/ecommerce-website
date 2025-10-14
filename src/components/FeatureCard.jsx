import React from 'react'

function FeatureCard({ icon, name, details }) {
  return (
    <div className="flex flex-col items-center justify-center w-60 h-48 p-4  rounded-xl shadow-sm text-center gap-2">
      <div className=' bg-gray-500 p-2 flex items-center justify-center rounded-full'>
        <div className="bg-black w-16 h-16 flex items-center justify-center rounded-full">
          <i className={`${icon} text-white text-2xl`} aria-label={name}></i>
        </div>
      </div>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{details}</p>
    </div>
  )
}

export default FeatureCard
