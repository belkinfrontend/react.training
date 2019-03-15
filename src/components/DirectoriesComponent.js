import React, { Component } from 'react';
// import { Router, browserHistory } from 'react-router';

import PropTypes from 'prop-types';
import { Link, Redirect, withRouter, browserHistory } from 'react-router-dom';
import history from '../history';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

export class DirectoriesComponent extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	style = {
		marginLeft: '14px !important',
	};

	getDirectoriesList = directories =>
		directories.map(({ name, id, children }) => {
			return (
				<li key={id}>
					{id === 1 ? null : (
						<Link to={`/directory/${id}`}>
							<ListItem button>
								<ListItemText inset primary={name} />
								{id === 1 ? null : (
									<Tooltip title="Delete">
										<IconButton
											aria-label="Delete"
											onClick={() => {
												this.props.deleteDirectory(id);
												// this.routeChange();
												history.push('/directory/1');
											}}
										>
											<DeleteIcon />
										</IconButton>
									</Tooltip>
								)}
							</ListItem>
						</Link>
					)}
					{children ? <ul>{this.getDirectoriesList(children)}</ul> : null}
				</li>
			);
		});

	render() {
		const { directories } = this.props;

		return (
			<div className="directoriesList">
				<h1>Directories</h1>
				<Button onClick={() => history.push('/directory/1')}>Redirect</Button>
				{this.props.isLoading ? (
					<div className="cssload-container">
						<div className="cssload-whirlpool" />
					</div>
				) : (
					<List className="directoryItem">
						{this.getDirectoriesList(directories)}
					</List>
				)}
			</div>
		);
	}
}

DirectoriesComponent.propTypes = {
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object,
	isLoading: PropTypes.bool.isRequired,
	deleteDirectory: PropTypes.func,
};

export default withRouter(DirectoriesComponent);
