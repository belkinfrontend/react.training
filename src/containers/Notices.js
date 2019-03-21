import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoticesComponent from '../components/NoticesComponent/NoticesComponent';
import AddNoticeComponent from './AddNoticeContainer';
import Search from './Search';
import { getSearchedNoticesSelector } from '../selectors';

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
		const { notices } = this.props;
		const actualNotices = notices.filter(
			({ directoryId }) => directoryId === parseInt(this.props.directoryID)
		);

		return (
			<section>
				<Search />
				<NoticesComponent
					notices={actualNotices}
					directoryID={this.props.directoryID}
					isLoading={this.props.isLoading}
					deleteNotice={this.props.deleteNotice}
					editNotice={this.props.editNotice}
					dragNotice={this.props.dragNotice}
					addNewNotice={this.props.addNewNotice}
				/>
				<AddNoticeComponent
					directoryID={this.props.directoryID}
					addNewNotice={this.props.addNewNotice}
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

const mapStateToProps = state => ({
	// notices: notices.items,
	notices: getSearchedNoticesSelector(state),
	notice: state.notices.item,
	isLoading: state.notices.isLoading,
});

export default connect(
	mapStateToProps,
	{ getAllNotices, addNewNotice, deleteNotice, editNotice, dragNotice }
)(Notices);
