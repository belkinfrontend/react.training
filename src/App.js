import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import ButtonAppBar from './components/ButtonAppBar';
import Notices from './containers/Notices';
import Directories from './containers/Directories';

import './App.scss';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<ButtonAppBar />
						<main>
							<Route exact path="/" component={Directories} />
							<Route exact path="/directory/:id" component={Directories} />
							<Route exact path="/directory/:id" component={Notices} />
						</main>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
