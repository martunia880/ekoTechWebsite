import React from 'react';

export default function Offer() {
	
	return (
		<section className='offers'>
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
                <div className='offer'>
                    <div className='offer__img offer__img--2'></div>
                    <h3 className='offer__heading'>Montaż Monitoringu</h3>
                    <p className='offer__description offer__description--center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat unde ratione eaque! Totam ut rem, quos ipsum nesciunt quaerat fuga, molestias aliquid.</p>
                </div>
                <div className='offer'>
                    <div className='offer__img offer__img--2'></div>
                    <h3 className='offer__heading'>Diagnoza i rozwiązywanie problemów technicznnych</h3>
                    <p className='offer__description offer__description--center' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, minus?</p>
                </div>
                <div className='offer'>
                    <div className='offer__img offer__img--3'></div>
                    <h3 className='offer__heading'>Naprawa komputerów</h3>
                    <p className='offer__description offer__description--center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro!</p>
                </div>
                <div className='offer'>
                    <div className='offer__img offer__img--3'></div>
                    <h3 className='offer__heading'>Rozszerzanie sieci Wi-Fi</h3>
                    <p className='offer__description offer__description--center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro!</p>
                </div>
            </div>
        </section>
	);
}