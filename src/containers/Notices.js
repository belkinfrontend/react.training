import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoticesComponent from '../components/NoticesComponent';
import AddNoticeComponent from './AddNoticeContainer';

import {
	getAllNotices,
	addNewNotice,
	deleteNotice,
	editNotice,
	dragNotice,
} from '../actions/noticeActions';

class Notices extends Component {
	constructor(props) {
		super(props);
		this.props.getAllNotices();
	}

	render() {
		console.log(this.props);
		const {
			notices,
			match: {
				params: { id },
			},
		} = this.props;
		const actualNotices = notices.filter(({ directoryId }) => directoryId === id);

		return (
			<section>
				<NoticesComponent
					notices={actualNotices}
					isLoading={this.props.isLoading}
					deleteNotice={this.props.deleteNotice}
					editNotice={this.props.editNotice}
					dragNotice={this.props.dragNotice}
				/>
				<AddNoticeComponent
					directoryID={id}
					addNewNotice={this.props.addNewNotice}
					currentItem={this.props.currentItem}
				/>
			</section>
		);
	}
}

Notices.propTypes = {
	getAllNotices: PropTypes.func.isRequired,
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	deleteNotice: PropTypes.func,
};

const mapStateToProps = ({ notices }) => ({
	notices: notices.items,
	notice: notices.item,
	isLoading: notices.isLoading,
	currentItem: notices.currentItem,
});

export default connect(
	mapStateToProps,
	{ getAllNotices, addNewNotice, deleteNotice, editNotice, dragNotice }
)(Notices);
