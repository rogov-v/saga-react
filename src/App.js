import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { fetchDog } from './store/actions';

function App(props) {
	const { dispatch } = props;

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<button onClick={() => dispatch(fetchDog())}>Click me</button>
			</header>
		</div>
	);
}

const ConnectedApp = connect((state) => {
	return state;
})(App);

export default ConnectedApp;
