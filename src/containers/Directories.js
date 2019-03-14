import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	getDirectories,
	addNewDirectory,
	deleteDirectory,
} from '../actions/directoryActions';

import { getUnflattenTree } from '../selectors';

import AddDirectoryComponent from '../components/AddDirectoryComponent';
import DirectoriesComponent from '../components/DirectoriesComponent';

class Directories extends Component {
	constructor(props) {
		super(props);
		this.props.getDirectories();
	}

	render() {
		const {
			match: {
				params: { id },
			},
		} = this.props;
		return (
			<section>
				<AddDirectoryComponent
					isLoading={this.props.isLoading}
					addNewDirectory={this.props.addNewDirectory}
					directories={this.props.directories}
					directoryID={id}
					error={this.props.error}
				/>
				<DirectoriesComponent
					directory={this.props.directory}
					directories={this.props.directories}
					isLoading={this.props.isLoading}
					deleteDirectory={this.props.deleteDirectory}
				/>
			</section>
		);
	}
}

Directories.propTypes = {
	getDirectories: PropTypes.func.isRequired,
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	deleteDirectory: PropTypes.func,
};

const mapStateToProps = state => ({
	directories: getUnflattenTree(state.directories.items),
	directory: state.directories.item,
	isLoading: state.directories.isLoading,
	error: state.directories.error,
});

export default connect(
	mapStateToProps,
	{ getDirectories, addNewDirectory, deleteDirectory }
)(Directories);
