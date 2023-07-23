import React from 'react';

export default function Header({secondComponentRef}) {

	const handleClickScroll = () => {
		if (secondComponentRef.current) {
		  secondComponentRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	
	return (
		<header className='header' id='header'> 
			<div className='header__img'>
				<div className='header__text'>
					<h3 className='header__title'><span className='header__decor--first'>Eko</span>Tech</h3> 
                    <p className='header__description'>Szukasz solidnego fachowca złotej rączki?</p> 
					<p className='header__decor--second header__description'>Zadzwoń 530 868 713</p>
                    <button className='header__btn button--main' onClick={handleClickScroll}>Zobacz ofertę</button>
				</div>
				<div className='header__shadow'></div>
            </div>
		</header>
	);
}