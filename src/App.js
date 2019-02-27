import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import Notices from './containers/Notices';
// import AddNotice from './components/AddNotice';

import Directories from './containers/Directories';
import AddDirectory from './components/AddDirectory';

// import getCurrentDirectoryId from './containers/Notices';

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
						<header className="App-header">
							<p>
								<code>Notice App</code>
							</p>
						</header>
						<main>
							<section>
								<AddDirectory />
								<Directories />
							</section>

							<section>
								<Route exact path="/directory/:id" component={Notices} />
							</section>
						</main>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
