import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotices } from '../actions/noticeActions';
import { NoticesComponent } from '../components/NoticesComponent';

class Notices extends Component {
	constructor(props) {
		super(props);
		this.props.getNotices();
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.notice) {
			this.props.notices.push(nextProps.notice);
		}
	}

	render() {
		return <NoticesComponent notices={this.props.notices} />;
	}
}

Notices.propTypes = {
	getNotices: PropTypes.func.isRequired,
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	notices: state.notices.items,
	notice: state.notices.item,
});

export default connect(
	mapStateToProps,
	{ getNotices }
)(Notices);
