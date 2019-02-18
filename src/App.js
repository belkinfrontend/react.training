// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './store';

import ButtonAppBar from './components/ButtonAppBar';
import Folders from './components/Folders/Folders';
import Corporative from './components/Corporative';
import Private from './components/Private';
import OtherActivities from './components/OtherActivities';
import NotFoundComponent from './components/NotFoundComponent';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Search from './components/Search';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<ButtonAppBar />
					<Grid container>
						<Folders />
						<div>
							<Search />
							<Switch>
								<Route exact path="/" component={Corporative} />
								<Route exact path="/private" component={Private} />
								<Route exact path="/other_activities" component={OtherActivities} />
								<Route component={NotFoundComponent} />
							</Switch>
						</div>
					</Grid>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
