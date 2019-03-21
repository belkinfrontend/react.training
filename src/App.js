import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import store from './store';

import ButtonAppBar from './components/ButtonAppBar';
import Wrapper from './containers/Wrapper';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<>
						<ButtonAppBar />

						<Switch>
							<Redirect exact from="/" to="/directory/1" />
							<Route path="/directory/:id" component={Wrapper} />
						</Switch>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
