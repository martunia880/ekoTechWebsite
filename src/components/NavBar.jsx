import React, {useState} from "react";

export default function NavBar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
    const handleMobileNavToggle = () => {
      setIsMobileNavOpen(!isMobileNavOpen);
    };
  
    return (
      <nav className='navbar'>
        <div className='navbar__logo'>
          <span>Logo</span>
        </div>
  
        <div className={`navbar__links ${isMobileNavOpen ? 'open' : ''}`}>
          <a href='#home'>Home</a>
          <a href='#oferta'>Oferta</a>
          <a href='#opinie'>Opinie</a>
        </div>
  
        <div className='navbar__mobile-toggle' onClick={handleMobileNavToggle}>
          <span>&#9776;</span>
        </div>
      </nav>
    );
  }