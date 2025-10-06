import {useState} from 'react'


function Header({cartCount, onToggleSidebar}) {

  const [isMenuOpen,setIsMenuOpen]=useState(false)

  return (
    <div className='header-container relative flex justify-between items-center px-4 py-3 border-b md:px-[4%] lg:px-[7%]'>


      
          <button className='md:hidden flex items-center gap-1 text-sm '
                  onClick={onToggleSidebar}>

              <i className="fa-solid fa-list"></i>
              <span> Categories</span>
          </button>
        <p className='logo  absolute -translate-x-1/2 left-1/2  md:static md:translate-x-0  flex-1 md:flex-none font-bold text-xl'>Exclusive</p>


        
 
           
        <ul className='list-option hidden text-sm lg:text-base  md:flex space-x-5 lg:space-x-8 '>
            <li className='option home'>Home</li>
            <li className='option'>Contact</li>
            <li className='option'>About</li>
            <li className='option'>SignUp</li>
        </ul>
     
        <div className=' right-container hidden md:flex justify-center items-center gap-1  lg:gap-2'>
          
          <div className='search-box flex justify-center items-center overflow-hidden w-32 sm:w-40 md:w-52 lg:w-64 '>
              <input className='search-input flex-1 text-sm md:text-xs' type='text' placeholder='What are you looking for?'/>
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>

          <div className='cart-icon gap-1  lg:gap-2  md:flex justify-center items-center'>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className='cart-count'>0</span>   
          </div>
        </div>


      <button className='md:hidden' onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
       <i className="fa-solid fa-bars text-xl"></i>
      </button>

      

      {isMenuOpen && (
        <div className="mobile-container absolute top-full left-0 w-full bg-gray-400 text-white p-2 md:hidden flex items-center justify-between ">
          <ul className="mobile-list  flex space-x-2 text-sm ">
            <li className="option">Home</li>
            <li className="option">Contact</li>
            <li className="option">About</li>
            <li className="option">SignUp</li>
          </ul>

          <div className="flex space-x-1">
            <div className="search-box relative flex items-center ">
              <input
                className="search-input w-full px-3 py-1 rounded border border-white bg-transparent text-white flex-1"
                type="text"
                placeholder="What are you looking for?"
              />
              <i className=" fa-solid fa-magnifying-glass search-icon absolute right-2 top-1/2 -translate-y-1/2"></i>
            </div>



          </div>
        </div>
      )}



          </div>
          
          
            
            

  )
}

export default Header
