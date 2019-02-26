import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewDirectory } from '../actions/directoryActions';

class AddDirectory extends Component {
	constructor(props) {
		super();
		this.state = {
			id: '',
			parentId: '',
			name: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const directory = {
			id: this.state.id,
			name: this.state.name,
			parentId: 1,
		};
		console.log(this.props);
		this.props.addNewDirectory(directory);
		this.clearForm();
	}

	clearForm() {
		this.setState({ id: '', parentId: '', name: '' });
	}

	render() {
		return (
			<div>
				<h1>Add Directories</h1>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.name}
						name="name"
						placeholder="name"
						onChange={this.onChange}
						required
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

AddDirectory.propTypes = {
	addNewDirectory: PropTypes.func.isRequired,
	directory: PropTypes.object,
};

export default connect(
	null,
	{ addNewDirectory }
)(AddDirectory);
