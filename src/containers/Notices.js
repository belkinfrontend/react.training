import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllNotices } from '../actions/noticeActions';
import { NoticesComponent } from '../components/NoticesComponent';
import AddNotice from '../components/AddNotice';

class Notices extends Component {
	constructor(props) {
		super(props);
		this.props.getAllNotices();
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		// if (nextProps.notice) {
		// 	this.props.notices.push(nextProps.notice);
		// }
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
			<div>
				<span>{id}</span>
				<NoticesComponent
					notices={actualNotices}
					isLoading={this.props.isLoading}
				/>
				<AddNotice directoryID={id} />
			</div>
		);
	}
}

Notices.propTypes = {
	getAllNotices: PropTypes.func.isRequired,
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
	notices: state.notices.items,
	notice: state.notices.item,
	isLoading: state.notices.isLoading,
});

export default connect(
	mapStateToProps,
	{ getAllNotices }
)(Notices);
