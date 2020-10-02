import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import Countdown from './components/countdown';
import Dashboard from './components/dashboard';
import './scss/app.scss';

function App() {
	// const [mode, setMode] = useState();
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/dashboard' component={Dashboard} />
					<Route
						path='/study'
						render={(props) => (
							<Countdown
								{...props}
								duration='1500'
								color='#63bfac'
								mode='study'
								image='yoda.png'
							/>
						)}
					/>
					<Route
						path='/break'
						render={(props) => (
							<Countdown
								{...props}
								duration='300'
								color='#E17E56'
								mode='break'
								image='bith.png'
							/>
						)}
					/>
				</Switch>
				{/* <Countdown
					duration='1500'
					color='#63bfac'
					mode='study'
					image='yoda.png'
				/>
				<Countdown
					duration='300'
					color='#E17E56'
					mode='break'
					image='bith.png'
				/> */}
			</div>
		</Router>
	);
}

export default App;
