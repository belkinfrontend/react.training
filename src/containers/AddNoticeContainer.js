import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';

import ChipInput from 'material-ui-chip-input';

import { editNotice } from '../actions/noticeActions';

class AddNoticeContainer extends Component {
	render() {
		return (
			<div>
				<h1>Add Notices</h1>

				<Formik
					initialValues={{
						title: '',
						description: '',
						tags: [],
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						const notice = {
							directoryId: parseInt(this.props.directoryID),
							title: values.title,
							description: values.description,
							tags: values.tags,
						};
						this.props.addNewNotice(notice);

						setTimeout(() => setSubmitting(false), 2 * 1000);
					}}
				>
					{props => {
						const handleAddChip = tag => {
							props.setFieldValue('tags', props.values.tags.concat([tag]));
						};

						const handleDeleteChip = (oldTag, index) => {
							props.setFieldValue(
								'tags',
								props.values.tags.filter(tag => tag !== oldTag)
							);
						};
						return (
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
								<ChipInput
									className="tags"
									defaultValue={props.values.tags}
									value={props.values.tags}
									name="tags"
									label="Tags"
									margin="normal"
									variant="outlined"
									fullWidth
									onAdd={handleAddChip}
									onDelete={handleDeleteChip}
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
									style={{ marginLeft: '10px' }}
								>
									Submit
								</Button>
							</Form>
						);
					}}
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
	// currentItem: notices.currentItem,
});

export default connect(
	mapStateToProps,
	{ editNotice }
)(AddNoticeContainer);
