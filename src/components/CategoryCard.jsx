import React from 'react'

function CategoryCard({name,icon}) {
  return (
    <div >
      <div className="flex flex-col items-center justify-center w-40 h-40 border rounded-xl shadow-sm hover:shadow-md transition">
      <i className={`${icon} w-13 h-12 mb-2 `} />
      <p className="text-sm font-medium">{name}</p>
    </div>
    </div>
  )
}

export default CategoryCard
