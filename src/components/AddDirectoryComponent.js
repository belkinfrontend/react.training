import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
		console.log(this.props);

		const directory = {
			id: parseInt(this.state.id),
			name: this.state.name,
			parentId: parseInt(this.props.directoryID), // ===== CHANGE IT LATER
		};

		// const { directories } = this.props;
		// function unflatten(directories) {
		// 	let tree = [],
		// 		mappedArr = {},
		// 		arrElem,
		// 		mappedElem;

		// 	// First map the nodes of the array to an object -> create a hash table.
		// 	for (let i = 0, length = directories.length; i < length; i++) {
		// 		arrElem = directories[i];
		// 		mappedArr[arrElem.id] = arrElem;
		// 		mappedArr[arrElem.id]['children'] = [];
		// 	}

		// 	for (let id in mappedArr) {
		// 		if (mappedArr.hasOwnProperty(id)) {
		// 			mappedElem = mappedArr[id];
		// 			// If the element is not at the root level, add it to its parent array of children.
		// 			if (mappedElem.parentId) {
		// 				mappedArr[mappedElem['parentId']]['children'].push(mappedElem);
		// 			}
		// 			// If the element is at the root level, add it to first level elements array.
		// 			else {
		// 				tree.push(mappedElem);
		// 			}
		// 		}
		// 	}
		// 	return tree;
		// }

		// let tree = unflatten(directories);
		// console.log(tree);

		this.props.addNewDirectory(directory);

		this.clearForm();
	}

	clearForm() {
		this.setState({ id: null, parentId: null, name: '' });
	}

	render() {
		return (
			<div>
				<h3>Add Directories</h3>
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
					<Tooltip title="Add New Directory">
						<Button type="submit" variant="contained" size="small" color="primary">
							Submit
						</Button>
					</Tooltip>
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
