import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import IconButton from '@material-ui/core/IconButton';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

export class DirectoriesComponent extends Component {
	state = {
		open: true,
	};

	style = {
		marginLeft: '14px !important',
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	getDirectoriesList = directories =>
		directories.map(({ name, id, children }) => {
			return (
				<li key={id}>
					<Link to={`/directory/${id}`}>
						<ListItem button onClick={this.handleClick}>
							<ListItemText inset primary={name} />
							{id === 1 ? null : (
								<Tooltip title="Delete">
									<IconButton
										aria-label="Delete"
										onClick={() => this.props.deleteDirectory(id)}
									>
										<DeleteIcon />
									</IconButton>
								</Tooltip>
							)}
						</ListItem>
					</Link>
					{children ? <ul>{this.getDirectoriesList(children)}</ul> : null}
				</li>
			);
		});

	render() {
		const { directories } = this.props;

		return (
			<div className="directoriesList">
				<h1>Directories</h1>
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

export default DirectoriesComponent;
