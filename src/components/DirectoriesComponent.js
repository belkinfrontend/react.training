import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class DirectoriesComponent extends Component {
	render() {
		console.log(this.props);
		const directoryItem = this.props.directories.map(({ id, name }) => (
			<div key={id} className="directoryItem">
				<Link to={`/directory/${id}`}>{name}</Link>
				{id !== 1 ? (
					<>
						{/* <button onClick={this.props.deleteDirectory}>Delete</button> */}
						<button onClick={() => this.props.deleteDirectory(id)}>Delete</button>
					</>
				) : (
					<></>
				)}
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
	deleteDirectory: PropTypes.func,
};

export default DirectoriesComponent;
