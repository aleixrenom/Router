import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
	<div>
		<BrowserRouter>
		<div>
			<Link to="/">Home</Link>{' '}
			<Link to="/about">About</Link>{' '}
			<Link to="/contact">Contact</Link>{' '}
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route render={() => <h1>Page not found</h1>} />
			</Switch>
		</div>
		</BrowserRouter>
	</div>
  );
}

export default App;
