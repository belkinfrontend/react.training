// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './store';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ButtonAppBar from './components/ButtonAppBar';
import Directories from './components/Directories/Directories';
import Corporative from './components/Corporative';
import Private from './components/Private';
import OtherActivities from './components/OtherActivities';
import NotFoundComponent from './components/NotFoundComponent';

import Grid from '@material-ui/core/Grid';
import Search from './components/Search';
import NoteDialog from './containers/NoteDialog';

import './App.scss';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<ButtonAppBar />
					<Grid container>
						<Directories />
						<div>
							<Search />
							<Switch>
								<Route exact path="/" component={Corporative} />
								<Route exact path="/private" component={Private} />
								<Route exact path="/other_activities" component={OtherActivities} />
								<Route component={NotFoundComponent} />
								{/* <Route path="/directory/:id" /> */}
							</Switch>
							<NoteDialog />
						</div>
					</Grid>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
