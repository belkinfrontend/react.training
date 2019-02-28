import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import ButtonAppBar from './components/ButtonAppBar';
import Notices from './containers/Notices';
import Directories from './containers/Directories';

import store from './store';

// // ----------------  TEST COMPONENT
// const CommonDirectoryElement = ({ match }) => {
// 	console.log(match.params);
// 	return <span>{match.params.id}</span>;
// };
// // ----------------  TEST COMPONENT

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<ButtonAppBar />
						<main>
							<Directories />
							<Route exact path="/directory/:id" component={Notices} />
						</main>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
