import React from 'react';
import offersData from '../data/offers-data';

export default function Offer({secondComponentRef}) {
	
	return (
		<section className='offers' id='offers' ref={secondComponentRef}>
            <h2 className='offers__heading'>Oferta</h2>
            <div className='box'>
                <div className='offer'>
                    <div className='offer__img offer__img--1'></div>
                    <h3 className='offer__heading'>Usługi w zakresie</h3>
                    <p className='offer__description offer__description--left' >
                        <ul>
                            <li>elektryki, mechaniki i hydrauliki</li>
                            <li>inteligentne sterowanie domem</li>
                            <li>naprawy i konserwacji instalacji domowych</li>
                        </ul>
                    </p>
                </div>
                {offersData.map((item) => (
                    <div className='offer'>
                    <div className={`offer__img ${item.imgClass}`}></div>
                    <h3 className='offer__heading'>{item.heading}</h3>
                    <p className='offer__description offer__description--left'>{item.description}</p>
                  </div>
                ))}
            </div>
        </section>
	);
}