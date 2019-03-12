import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class AddDirectoryComponent extends Component {
	state = {
		open: false,
	};

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ open: false });
	};

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
			parentId: parseInt(this.props.directoryID),
		};

		this.props.addNewDirectory(directory);
		this.setState({ open: true });

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
					<Button
						type="submit"
						variant="contained"
						size="small"
						color="primary"
						// onClick={this.handleClick}
					>
						Submit
					</Button>

					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						open={this.state.open}
						autoHideDuration={4000}
						onClose={this.handleClose}
						ContentProps={{
							'aria-describedby': 'message-id',
						}}
						message={
							this.props.error ? (
								<span id="message-id">{this.props.error.message}</span>
							) : (
								<span id="message-id">New directory was added</span>
							)
						}
						action={[
							<IconButton
								key="close"
								aria-label="Close"
								color="inherit"
								// className={classes.close}
								onClick={this.handleClose}
							>
								<CloseIcon />
							</IconButton>,
						]}
					/>
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
