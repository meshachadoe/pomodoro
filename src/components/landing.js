import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/landing.scss';

function Landing() {
	const [welcomeText, setWelcome] = useState('processing translation');
	const [loaded, setLoaded] = useState(false);

	setTimeout(() => {
		setWelcome('welcome to mos eisley cantina');
		setLoaded(true);
	}, 6000);

	return (
		<div className='landing'>
			<h1>
				Welcome to Mos Eisley Cantina Welcome to Mos Eisley Cantina Welcome to
				Mos Eisley Cantina
			</h1>
			<h2>{welcomeText}</h2>
			{loaded ? (
				<Link to='/dashboard'>
					<button>enter cantina</button>
				</Link>
			) : null}
		</div>
	);
}

export default Landing;
