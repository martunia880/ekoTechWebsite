import React from 'react';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='footer'>
			<p className='footer__paragraph'>{`© ${currentYear} EkoTech All Rights Reserved`}</p>
		</footer>
	);
}
