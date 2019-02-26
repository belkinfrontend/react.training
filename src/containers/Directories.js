import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDirectories } from '../actions/directoryActions';
import { DirectoriesComponent } from '../components/DirectoriesComponent';

class Directories extends Component {
	constructor(props) {
		super(props);
		this.props.getDirectories();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.directory) {
			this.props.directories.push(nextProps.directory);
		}
	}

	render() {
		return (
			<DirectoriesComponent
				directories={this.props.directories}
				isLoading={this.props.isLoading}
			/>
		);
	}
}

Directories.propTypes = {
	getDirectories: PropTypes.func.isRequired,
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	directories: state.directories.items,
	directory: state.directories.item,
	isLoading: state.directories.isLoading,
});

export default connect(
	mapStateToProps,
	{ getDirectories }
)(Directories);
