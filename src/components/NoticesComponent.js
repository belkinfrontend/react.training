import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoticesComponent extends Component {
	render() {
		// console.log(this.props);
		const noticeItem = this.props.notices.map(notice => (
			<div key={notice.id} className="noticeItem">
				<img src="https://bit.ly/2EvLYBO" alt="notice" />
				{/* <p>id: {notice.id}</p> */}
				<p>{notice.title}</p>
				{/* <p>description: {notice.description}</p> */}
			</div>
		));
		return (
			<div>
				<h1>Notices</h1>
				<div className="noticesList">{noticeItem}</div>
			</div>
		);
	}
}

NoticesComponent.propTypes = {
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object,
};

export default NoticesComponent;
