import  { useState } from 'react';
import './TopHeader.css';

function TopHeader() {
  const [language, setLanguage] = useState('English');

  return (
    <div className="top-header-container flex flex-row justify-between items-center px-4 py-2">
      
      <p className=" md:text-center promo-text">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <a href='/' className="shop-now">Shop Now</a>
      </p>

      <select
        className="ml-2 md:mt-0 self-center md:self-auto language-select"
        id="language-selector"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="English">English</option>
        <option value="Arabic">Arabic</option>
      </select>
    </div>
  );
}

export default TopHeader;
