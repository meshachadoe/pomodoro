import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/dashboard.scss';

function Dashboard() {
	return (
		<div className='dashboard'>
			<Link to='/'>
				<button className='nav-button'>leave cantina</button>
			</Link>
			<div className='dashboard__component__wrapper'>
				<div className='dashboard__component aqua'>
					<Link to='/study'>
						<img src={require('../img/yoda.png')} alt={'Star Wars Character'} />
					</Link>
					<h2>focus with yoda</h2>
				</div>
				<div className='dashboard__component orange'>
					<Link to='/break'>
						<img src={require('../img/bith.png')} alt={'Star Wars Character'} />
					</Link>
					<h2>chill at the bar</h2>
				</div>
			</div>
			<footer>
				<p>
					characters owned by Star Wars.
					<br />i do not own any of the characters.
				</p>
				{/* <button className='display-toggle'>
					dark mode
					<label className='switch'>
						<input type='checkbox' />
						<span className='slider round'></span>
					</label>
				</button> */}
			</footer>
		</div>
	);
}
export default Dashboard;
