import React from 'react';
import Provider from './context/provider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';
import './App.css';

function App() {
	return (
		<Router>
			<Provider>
				<Switch>
					<Route exact path='/'>
						<Home/>
					</Route>
					<Route exact path='/list'>
						<List/>
					</Route>
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
