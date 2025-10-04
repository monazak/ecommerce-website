import {useState} from 'react'
import './Header.css'

function Header({cartCount, onToggleSidebar}) {

  const [isMenuOpen,setIsMenuOpen]=useState(false)

  return (
    <div className='header-container relative flex justify-between items-center px-4 py-3 md:px-[4%] lg:px-[7%] bg-green-100  sm:bg-blue-100 md:bg-pink-100 lg:bg-red-100'>

        <div className='flex items-center justify-between w-full md:w-auto'>
          <button className=' md:hidden flex items-center '
                  onClick={onToggleSidebar}>
              <i className="fa-solid fa-list "></i>
              <span> <p className='text-small'>Categories</p></span>

          </button>
        <p className='logo text-center flex-1 md:flex-none'>Exclusive</p>

        </div>
        
 
           
        <ul className='list-option hidden  md:flex space-x-8 '>
            <li className='option home'>Home</li>
            <li className='option'>Contact</li>
            <li className='option'>About</li>
            <li className='option'>SignUp</li>
        </ul>
     
        <div className='right-container hidden md:flex justify-center items-center'>
          <div className='search-box flex justify-center items-center '>
              <input className='search-input' type='text' placeholder='What are you looking for?'/>
              <i className="fa-solid fa-magnifying-glass search-icon"></i>

          </div>

          <div className='cart-icon  md:flex justify-center items-center'>
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
          <ul className="mobile-list  flex space-x-2">
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
                placeholder="Search.."
              />
              <i className=" fa-solid fa-magnifying-glass search-icon absolute right-2 top-1/2 -translate-y-1/2"></i>
            </div>

            <div className="cart-icon flex items-center space-x-1 relative">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
            </div>
          </div>
        </div>
      )}



          </div>
          
          
            
            

  )
}

export default Header
