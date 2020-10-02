import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/landing-static.scss';

function Landing() {
	return (
		<div className='landing'>
			<h1>Welcome to Mos Eisley Cantina</h1>
			<h2>welcome to mos eisley cantina</h2>
			<Link to='/dashboard'>
				<button>enter cantina</button>
			</Link>
		</div>
	);
}

export default Landing;
