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

export class DirectoriesComponent extends Component {
	state = {
		open: false,
	};

	style = {
		marginLeft: '14px',
	};

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	render() {
		console.log(this.props);
		const directoryItem = this.props.directories.map(({ id, name }) => (
			<Fragment key={id}>
				<Link to={`/directory/${id}`}>
					{id === 1 ? (
						<ListItem button onClick={this.handleClick}>
							<ListItemText primary={name} />
							{this.state.open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
					) : null}
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List disablePadding>
							{id === 1 ? null : (
								<ListItem onClick={this.handleClick} button>
									<ListItemText inset primary={name} />

									{this.state.open ? <ExpandLess /> : <ExpandMore />}

									<IconButton
										aria-label="Delete"
										onClick={() => this.props.deleteDirectory(id)}
									>
										<DeleteIcon />
									</IconButton>
								</ListItem>
							)}
						</List>
					</Collapse>
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
					<List className="directoryItem">
						{directoryItem}

						{/* HARDCODE */}

						{/* <ListItem button onClick={this.handleClick}>
							<ListItemText inset primary="HardCode" />
							{this.state.open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={this.state.open} timeout="auto" unmountOnExit>
							<List disablePadding>
								<ListItem button style={this.style}>
									<ListItemText inset primary="-HardCode" />
								</ListItem>
							</List>
						</Collapse> */}
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
