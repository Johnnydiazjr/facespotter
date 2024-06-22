import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './Brain.jpg';
import './Logo.css';

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" style={{ height: 120, width: 150 }} >
		     <div className="Tilt-inner"><img alt='logo' src={Brain}/></div>
		    </Tilt>
		</div>
	);
}

export default Logo;