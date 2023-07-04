import React from 'react';

export default function Header() {
	return (
		<header className='header'> 
			<div className='header__img'>
				<div className='header__shadow'>
                    <h3 className='header__title'>hejka</h3>
                    <p className='header__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima magnam tempore laboriosam, repellendus impedit voluptate voluptatem maxime quisquam sed neque.</p>
                    <button className='header__btn'>Zobacz ofertę</button>
                </div>
            </div>
		</header>
	);
}