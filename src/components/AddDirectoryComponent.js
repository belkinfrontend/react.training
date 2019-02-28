import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDirectoryComponent extends Component {
	constructor(props) {
		super();
		this.state = {
			id: null,
			parentId: null,
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
			parentId: 1, // ===== CHANGE IT LATER
		};
		console.log(this.props);
		this.props.addNewDirectory(directory);
		this.clearForm();
	}

	clearForm() {
		this.setState({ id: null, parentId: null, name: '' });
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

AddDirectoryComponent.propTypes = {
	addNewDirectory: PropTypes.func,
	directory: PropTypes.object,
};

export default AddDirectoryComponent;
