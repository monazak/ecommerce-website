import React from 'react'

function SectionName({ name }) {
  return (
    <div className='flex justify-start items-center gap-5'>
      <div className='h-10  sm:h-8 w-5 bg-red-500 rounded'></div>
      <h5 className='text-sm sm:text-base text-red-500 font-bold'>{name}</h5>
    </div>
  )
}

export default SectionName
