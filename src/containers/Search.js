import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSearchedNotices } from '../actions/noticeActions';
import { getSearchedNoticesSelector } from '../selectors';

import SearchComponent from '../components/SearchComponent';

export class Search extends Component {
	render() {
		console.log(this.props.notices);
		return (
			<SearchComponent
				notices={this.props.notices}
				getSearchedNotices={this.props.getSearchedNotices}
			/>
		);
	}
}

Search.propTypes = {
	getSearchedNotices: PropTypes.func,
};

const mapStateToProps = state => ({
	notices: getSearchedNoticesSelector(state),
	// notices: state.notices.items,
});

export default connect(
	mapStateToProps,
	{ getSearchedNotices }
)(Search);
