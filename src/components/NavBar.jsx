import React, { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import logo from '../logo.png';

export default function NavBar() {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const handleMobileNavToggle = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};

	return (
		<BrowserRouter>
			<nav className='navbar container'>
				<div className='navbar__logo'>
					<span>EkoTech</span>
				</div>
				<div className='navbar__burger-btn' onClick={handleMobileNavToggle}>
					<span>&#9776;</span>
				</div>
				<ul className={`navbar__links ${isMobileNavOpen ? 'show' : ''}`}>
						<li>
							<a href='#home'>Home</a>
						</li>
						<li>
							<a href='#offers'>Oferta</a>
						</li>
						<li>
							<a href='#offers'>Oferta</a>
						</li>
					</ul>
			</nav>
		</BrowserRouter>
	);
}
