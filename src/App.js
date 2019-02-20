// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import store from './store';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ButtonAppBar from './components/MaterialUIComponent/ButtonAppBar';
import Directories from './components/Directories/Directories';
// import Corporative from './components/Corporative';
// import Private from './components/Private';
// import OtherActivities from './components/OtherActivities';
// import NotFoundComponent from './components/NotFoundComponent';
import CommonDirectoryElement from './components/CommonDirectoryElement';
import TestComponent from './components/TestComponent';

import Grid from '@material-ui/core/Grid';

import './App.scss';

// const CommonDirectoryElement = ({ match }) => {
// 	return <span>{match.params.id}</span>;
// };

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<ButtonAppBar />
					<Grid container>
						<Directories />
						<div>
							{/* <Switch> */}
							{/* <Route exact path="/" component={Corporative} />
									<Route exact path="/private" component={Private} />
									<Route exact path="/other_activities" component={OtherActivities} />
									<Route component={NotFoundComponent} /> */}
							<Route exact path="/directory/:id" component={CommonDirectoryElement} />
							<Route exact path="/directory/test" component={TestComponent} />
							{/* </Switch> */}
						</div>
					</Grid>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
