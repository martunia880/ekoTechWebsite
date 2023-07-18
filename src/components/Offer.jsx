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
                    <p className='offer__description offer__description--center'>EkoTech oferuje usługę kompleksowego montażu monitoringu, aby zapewnić Ci spokój i bezpieczeństwo.  </p>
                </div>
                <div className='offer'>
                    <div className='offer__img offer__img--3'></div>
                    <h3 className='offer__heading'>Diagnoza i rozwiązywanie problemów technicznnych</h3>
                    <p className='offer__description offer__description--center' >Mamy wiedzę i narzędzia potrzebne do skutecznego rozwiązywania różnorodnych, nietypowych problemów technicznych. </p>
                </div>
                <div className='offer'>
                    <div className='offer__img offer__img--4'></div>
                    <h3 className='offer__heading'>Naprawa komputerów</h3>
                    <p className='offer__description offer__description--center' >Jeśli masz problemy z wolnym działaniem, wirusami, awariami sprzętu czy innymi usterkami, jesteśmy gotowi naprawić Twój komputer.</p>
                </div>
                <div className='offer'>
                    <div className='offer__img offer__img--5'></div>
                    <h3 className='offer__heading'>Rozszerzanie sieci Wi-Fi</h3>
                    <p className='offer__description offer__description--center' >W EkoTech oferujemy usługę rozszerzania sieci Wi-Fi, aby zapewnić Ci mocne, stabilne i bezproblemowe połączenie internetowe. </p>
                </div>
            </div>
        </section>
	);
}