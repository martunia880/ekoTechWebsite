import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'



export default function Benefits() {
	return (
		<section className='benefits'>
			<div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faThumbsUp} /></div>
				<h3 className='benefit__title'>Profesjonalne podejście</h3>
				<p className='benefit__description'>Wybierając EkoTech, otrzymujesz usługi świadczone z profesjonalizmem i pasją. Wiemy, że profesjonalne podejście to klucz do budowania trwałych relacji z naszymi klientami, dlatego stawiamy na uczciwość, rzetelność i etykę w naszej pracy. </p>
			</div>
            <div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faClock} /></div>
				<h3 className='benefit__title'>Dostępność i elastyczność</h3>
				<p className='benefit__description'>Niezależnie od tego, czy potrzebujesz pilnej naprawy, czy planujesz skorzystać z innej naszej oferty, jesteśmy tutaj, aby Ci pomóc. Jesteśmy gotowi by odpowiedzieć na Twoje nagłe potrzeby. Dodatkowo rozumiemy, że Twój czas jest cenny, dlatego staramy się dostosować do Twojego harmonogramu. </p>
			</div>
			<div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faCoins} /></div>
				<h3 className='benefit__title'>Przystępne ceny</h3>
				<p className='benefit__description'>W EkoTech wiemy, że usługi naprawcze i techniczne nie powinny obciążać Twojego portfela. Dlatego oferujemy wysoką jakość usług w przystępnych cenach.</p>
			</div>
		</section>
	);
}
