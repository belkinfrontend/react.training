import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSearchedNotices } from '../actions/noticeActions';

import SearchComponent from '../components/SearchComponent';

export class Search extends Component {
	render() {
		return <SearchComponent getSearchedNotices={this.props.getSearchedNotices} />;
	}
}

Search.propTypes = {
	notices: PropTypes.array,
	getSearchedNotices: PropTypes.func,
};

const mapStateToProps = state => ({
	// notices: getSearchedNoticesSelector(state),
});

export default connect(
	mapStateToProps,
	{ getSearchedNotices }
)(Search);
