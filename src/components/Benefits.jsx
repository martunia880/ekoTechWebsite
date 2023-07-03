import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'



export default function Benefits() {
	return (
		<section className='benefits'>
			<div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faMedal} /></div>
				<h3 className='benefit__title'>Gwarancja jakości</h3>
				<p className='benefit__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima magnam tempore laboriosam, repellendus impedit voluptate voluptatem maxime quisquam sed neque.</p>
			</div>
            <div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faCoins} /></div>
				<h3 className='benefit__title'>Przystępne ceny</h3>
				<p className='benefit__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet architecto placeat repellat tempore perspiciatis corporis quod? Ad, commodi nobis?</p>
			</div>
            <div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faClock} /></div>
				<h3 className='benefit__title'>Dostępność i elastyczność</h3>
				<p className='benefit__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, veniam! Explicabo similique fugiat unde ducimus illo ipsum perferendis dignissimos ab. Dolor, consequuntur voluptatibus?</p>
			</div>
            <div className='benefit'>
				<div className='benefit__icon'><FontAwesomeIcon icon={faThumbsUp} /></div>
				<h3 className='benefit__title'>Profesjonalne podejście</h3>
				<p className='benefit__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore ducimus, adipisci molestiae culpa nesciunt hic necessitatibus ipsum cum?</p>
			</div>
		</section>
	);
}
