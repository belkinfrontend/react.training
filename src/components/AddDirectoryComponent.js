import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
			id: parseInt(this.state.id),
			name: this.state.name,
			parentId: parseInt(this.props.directoryID),
		};

		this.props.addNewDirectory(directory);
		this.clearForm();
	}

	clearForm() {
		this.setState({ id: null, parentId: null, name: '' });
	}

	render() {
		return (
			<div>
				<h3 style={{ marginBottom: '38px' }}>Add Directories</h3>
				<form onSubmit={this.onSubmit}>
					<TextField
						id="outlined-name"
						label="Name"
						name="name"
						value={this.state.name}
						onChange={this.onChange}
						margin="normal"
						variant="outlined"
						fullWidth
						required
					/>
					<Button type="submit" variant="contained" size="small" color="primary">
						Submit
					</Button>
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
