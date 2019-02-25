import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class DirectoriesComponent extends Component {
	render() {
		const directoryItem = this.props.directories.map(({ id, name }) => (
			<div key={id} className="directoryItem">
				{/* <p button component={Link} to={`/directory/${id}`}> */}
				<Link to={`/directory/${id}`}>{name}</Link>
			</div>
		));
		return (
			<div className="directoriesList">
				<h1>Directories</h1>
				<div>{directoryItem}</div>
			</div>
		);
	}
}

DirectoriesComponent.propTypes = {
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object,
};

export default DirectoriesComponent;
