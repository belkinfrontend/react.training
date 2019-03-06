import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';

import { editNotice } from '../actions/noticeActions';

class AddNoticeContainer extends Component {
	state = {
		id: '',
		title: '',
		description: '',
	};
	// 	// if (this.props.currentItem) {

	// getDerivedStateFromProps(props, state) {
	// 	console.log(props, state);
	// 	return {
	// 		id: props.currentItem.id,
	// 		title: props.currentItem.title,
	// 		description: props.currentItem.description,
	// 	};
	// }

	// onChange(e) {
	// 	this.setState({ [e.target.name]: e.target.value });
	// }

	// onSubmit(e) {
	// 	e.preventDefault();

	// 	console.log(this.props);

	// 	const notice = {
	// 		id: this.state.id,
	// 		directoryId: this.props.directoryID,
	// 		title: this.state.title,
	// 		description: this.state.description,
	//
	// 	// 	// EDIT -> PUT request
	// 	// } else {
	// 	// 	// NEW -> POST req
	// 	// }
	// 	this.props.addNewNotice(notice);
	// 	this.clearForm();
	// }

	clearForm() {
		this.setState({ title: '', description: '' });
	}

	render() {
		return (
			<div>
				<h1>Add Notices</h1>

				<Formik
					initialValues={{ title: '', description: '' }}
					onSubmit={(values, { setSubmitting }) => {
						// This is where you could wire up axios or superagent
						const notice = {
							directoryId: this.props.directoryID,
							title: values.title,
							description: values.description,
						};
						this.props.addNewNotice(notice);
						this.clearForm();

						console.log('Submitted Values:', values);
						// Simulates the delay of a real request
						setTimeout(() => setSubmitting(false), 2 * 1000);
					}}
				>
					{props => (
						<Form>
							<TextField
								label="Title"
								name="title"
								value={props.values.title}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								margin="normal"
								variant="outlined"
								required
								fullWidth
							/>
							<TextField
								label="Description"
								name="description"
								value={props.values.description}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								multiline
								rows="6"
								margin="normal"
								variant="outlined"
								fullWidth
							/>
							<Button
								type="reset"
								value="Reset"
								variant="contained"
								onClick={props.handleReset}
								disabled={!props.dirty || props.isSubmitting}
							>
								Reset
							</Button>

							<Button
								value="Submit"
								disabled={props.isSubmitting}
								type="submit"
								variant="contained"
								size="medium"
								color="primary"
							>
								Submit
							</Button>
						</Form>
					)}

					{/* </form> */}
				</Formik>
			</div>
		);
	}
}

AddNoticeContainer.propTypes = {
	addNewNotice: PropTypes.func.isRequired,
	notice: PropTypes.object,
};

const mapStateToProps = ({ notices }) => ({
	currentItem: notices.currentItem,
});

export default connect(
	mapStateToProps,
	{ editNotice }
)(AddNoticeContainer);
