import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

export class DirectoriesComponent extends Component {
	render() {
		console.log(this.props);
		const directoryItem = this.props.directories.map(({ id, name }) => (
			<Fragment key={id}>
				<Link to={`/directory/${id}`}>
					{id !== 1 ? (
						<ListItem button>
							<ListItemText primary={name} />
							{id !== 1 ? (
								<ListItemSecondaryAction>
									<IconButton
										aria-label="Delete"
										onClick={() => this.props.deleteDirectory(id)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							) : null}
						</ListItem>
					) : null}
				</Link>
			</Fragment>
		));
		return (
			<div className="directoriesList">
				<h1>Directories</h1>
				{this.props.isLoading ? (
					<div className="cssload-container">
						<div className="cssload-whirlpool" />
					</div>
				) : (
					<List className="directoryItem">{directoryItem}</List>
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
