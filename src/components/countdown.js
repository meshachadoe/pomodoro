import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import '../scss/countdown.scss';

function Countdown(props) {
	const [secondsLeft, setSecondsLeft] = useState(1500);
	const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
	let timer = 0;

	useEffect(() => {
		if (timer === 0 && secondsLeft > 0) {
			timer = setInterval(countdown, 1000);
		}
	}, []);

	useEffect(() => {
		const minutesTillEnd = Math.floor(secondsLeft / 60);
		const secondsTillEnd = secondsLeft % 60;
		setTimeLeft({ minutes: minutesTillEnd, seconds: secondsTillEnd });
		if (secondsLeft === 0) {
			clearInterval(timer);
		}
	}, [secondsLeft]);

	function countdown() {
		setSecondsLeft((prevSecondsLeft) => {
			return prevSecondsLeft - 1;
		});
	}

	return (
		<div className='countdown'>
			<button className='nav-button'>leave yoda</button>
			<div className='countdown__timer'>
				<img src={require('../img/yoda.png')} alt={'Yoda'} />
				<div>
					<h2>
						remaining <br /> time to focus
					</h2>
					{timeLeft.seconds >= 10 ? (
						<h3>
							{timeLeft.minutes}:{timeLeft.seconds}
						</h3>
					) : (
						<h3>
							{timeLeft.minutes}:{timeLeft.seconds}0
						</h3>
					)}
				</div>
			</div>
			<footer>
				<p>
					characters owned by Star Wars.
					<br />i do not own any of the characters.{' '}
				</p>
				<button className='display-toggle'>
					dark mode
					<label className='switch'>
						<input type='checkbox' />
						<span className='slider round'></span>
					</label>
				</button>
			</footer>
		</div>
	);
}

export default Countdown;
