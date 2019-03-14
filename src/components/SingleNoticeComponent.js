import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ChipInput from 'material-ui-chip-input';
import { Formik, Form } from 'formik';

export class SingleNotice extends Component {
	state = {
		open: false,
	};

	handleClickOpen = event => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	deleteNoticeFn = event => {
		const noticeid = event.currentTarget.dataset.noticeid;

		this.props.deleteNotice(parseInt(noticeid));
	};

	render() {
		const { title, description, id } = this.props.notice;
		return (
			<Card className="noticeItem">
				<Icon style={{ fontSize: 100 }} color="action">
					note
				</Icon>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography component="p">{description}</Typography>
				</CardContent>

				<CardActions>
					<Button
						onClick={this.handleClickOpen}
						data-noticeid={id}
						size="small"
						color="primary"
					>
						Edit
					</Button>
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle id="form-dialog-title">Edit notice</DialogTitle>
						<DialogContent>
							<DialogContentText>Edit notice</DialogContentText>
							<Formik
								initialValues={{
									directoryId: parseInt(this.props.directoryID),
									title: this.props.notice.title,
									description: this.props.notice.description,
									tags: this.props.notice.tags,
								}}
								onSubmit={(values, { setSubmitting }) => {
									const notice = { ...this.props.notice, ...values };
									this.props.editNotice(notice, id);

									setTimeout(() => setSubmitting(false), 2 * 1000);
								}}
							>
								{props => {
									console.log(props);
									const handleAddChip = tag => {
										props.values.tags.push(tag);
									};

									const handleDeleteChip = (tag, index) => {
										props.values.tags.splice(index, 1);
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
												// defaultValue={props.values.tags}
												value={props.values.tags}
												// defaultValue={['foo', 'bar']}
												name="tags"
												// onChange={tag => props.values.tags.push(...tag)}
												label="Tags"
												margin="normal"
												variant="outlined"
												fullWidth
												onAdd={chip => handleAddChip(chip)}
												onDelete={(chip, index) => handleDeleteChip(chip, index)}
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
									);
								}}

								{/* </form> */}
							</Formik>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Cancel
							</Button>
						</DialogActions>
					</Dialog>
					<Button
						onClick={this.deleteNoticeFn}
						data-noticeid={id}
						variant="contained"
						size="small"
						color="secondary"
					>
						Delete
					</Button>
				</CardActions>
			</Card>
		);
	}
}
