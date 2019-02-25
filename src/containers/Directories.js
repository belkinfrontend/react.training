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
		// console.log(nextProps);
		if (nextProps.directory) {
			this.props.directories.push(nextProps.directory);
		}
	}

	render() {
		return <DirectoriesComponent directories={this.props.directories} />;
	}
}

Directories.propTypes = {
	getDirectories: PropTypes.func.isRequired,
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	directories: state.directories.items,
	directory: state.directories.item,
});

export default connect(
	mapStateToProps,
	{ getDirectories }
)(Directories);
