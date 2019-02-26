import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class DirectoriesComponent extends Component {
	render() {
		console.log(this.props);
		const directoryItem = this.props.directories.map(({ id, name }) => (
			<div key={id} className="directoryItem">
				<Link to={`/directory/${id}`}>{name}</Link>
			</div>
		));
		return (
			<div className="directoriesList">
				<h1>Directories</h1>
				{this.props.isLoading ? (
					<div className="cssload-container">
						<div className="cssload-whirlpool" />
					</div>
				) : (
					<div>{directoryItem}</div>
				)}
			</div>
		);
	}
}

DirectoriesComponent.propTypes = {
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object,
	isLoading: PropTypes.bool.isRequired,
};

export default DirectoriesComponent;
