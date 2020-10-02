import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/countdown.scss';

function Countdown(props) {
	const [secondsLeft, setSecondsLeft] = useState(parseInt(props.duration));
	const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
	const [timer, setTimer] = useState(0);
	const styles = {
		backgroundColor: `${props.color}`,
	};

	useEffect(() => {
		if (timer === 0 && secondsLeft > 0) {
			setTimer(setInterval(countdown, 1000));
		}
	}, [timer]);

	useEffect(() => {
		if (secondsLeft === 0) {
			clearInterval(timer);
		}
		const minutesTillEnd = Math.floor(secondsLeft / 60);
		const secondsTillEnd = secondsLeft % 60;
		setTimeLeft({ minutes: minutesTillEnd, seconds: secondsTillEnd });
	}, [secondsLeft]);

	function countdown() {
		setSecondsLeft((prevSecondsLeft) => {
			return prevSecondsLeft - 1;
		});
	}

	return (
		<div style={styles} className='countdown'>
			<Link to='/dashboard'>
				{props.mode === 'study' ? (
					<button className='nav-button'>leave yoda</button>
				) : (
					<button className='nav-button'>leave bar</button>
				)}
			</Link>

			<div className='countdown__timer'>
				<img
					src={require('../img/' + props.image)}
					alt={'Star Wars Character'}
				/>
				<div>
					{props.mode === 'study' ? (
						<h2>
							remaining <br /> time to focus
						</h2>
					) : (
						<h2>
							time for <br /> a break
						</h2>
					)}

					{timeLeft.seconds >= 10 ? (
						<h3>
							{timeLeft.minutes}:{timeLeft.seconds}
						</h3>
					) : (
						<h3>
							{timeLeft.minutes}:0{timeLeft.seconds}
						</h3>
					)}
				</div>
			</div>
			<footer>
				<p>
					characters owned by Star Wars.
					<br />i do not own any of the characters.
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
