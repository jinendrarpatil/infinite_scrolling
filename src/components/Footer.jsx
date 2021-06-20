import React from 'react';
import './Footer.css';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="Footer_container">
			<footer className="Footer">
				<p> © {year} Shadi.com All Rights Reserved </p>
			</footer>
		</div>
	);
}

export default Footer;
