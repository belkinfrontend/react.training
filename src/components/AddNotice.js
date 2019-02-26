import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addNewNotice } from '../actions/noticeActions';

class AddNotice extends Component {
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

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const notice = {
			id: this.state.id,
			directoryId: 1,
			title: this.state.title,
			description: this.state.description,
		};
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
					{/* <input
						type="number"
						value={this.state.id}
						name="id"
						placeholder="id"
						onChange={this.onChange}
					/> */}
					<input
						type="text"
						value={this.state.title}
						name="title"
						placeholder="title"
						onChange={this.onChange}
						required
					/>
					<textarea
						name="description"
						value={this.state.description}
						placeholder="description"
						onChange={this.onChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

AddNotice.propTypes = {
	addNewNotice: PropTypes.func.isRequired,
	notice: PropTypes.object,
};

export default connect(
	null,
	{ addNewNotice }
)(AddNotice);
