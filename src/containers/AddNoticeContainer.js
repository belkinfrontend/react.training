import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { editNotice } from '../actions/noticeActions';

class AddNoticeContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			id: '',
			title: '',
			description: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		console.log(props, state);
		return {
			id: props.currentItem.id,
			title: props.currentItem.title,
			description: props.currentItem.description,
		};
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(this.props);

		const notice = {
			id: this.state.id,
			directoryId: this.props.directoryID,
			title: this.state.title,
			description: this.state.description,
		};
		// if (this.props.currentItem) {
		// 	// EDIT -> PUT request
		// } else {
		// 	// NEW -> POST req
		// }
		this.props.addNewNotice(notice);
		this.clearForm();
	}

	clearForm() {
		this.setState({ id: '', title: '', description: '' });
	}

	render() {
		return (
			<div>
				<h1>Add Notices</h1>
				<form onSubmit={this.onSubmit}>
					<TextField
						label="Title"
						name="title"
						value={this.state.title}
						onChange={this.onChange}
						margin="normal"
						variant="outlined"
						required
						fullWidth
					/>
					<TextField
						label="Description"
						name="description"
						value={this.state.description}
						multiline
						rows="6"
						margin="normal"
						variant="outlined"
						onChange={this.onChange}
						fullWidth
					/>
					<Button type="submit" variant="contained" size="medium" color="primary">
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

AddNoticeContainer.propTypes = {
	addNewNotice: PropTypes.func.isRequired,
	notice: PropTypes.object,
};

const mapStateToProps = state => ({
	currentItem: state.notices.currentItem,
});

export default connect(
	mapStateToProps,
	{ editNotice }
)(AddNoticeContainer);
