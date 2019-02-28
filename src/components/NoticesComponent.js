import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoticesComponent extends Component {
	render() {
		console.log(this.props.notices.length); //TODO if(this.props.notices.length > 0) {show NO NOTICES !!!!}

		const noticeItem = this.props.notices.map(notice => (
			<div key={notice.id} className="noticeItem">
				<img src="https://bit.ly/2EvLYBO" alt="notice" />
				<p>{notice.title}</p>
				<button onClick={() => this.props.deleteNotice(notice.id)}>Delete</button>
			</div>
		));
		return (
			<div>
				<h1>Notices</h1>
				{this.props.isLoading ? (
					<div className="cssload-container">
						<div className="cssload-whirlpool" />
					</div>
				) : (
					<div className="noticesList">{noticeItem}</div>
				)}
			</div>
		);
	}
}

NoticesComponent.propTypes = {
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object,
	isLoading: PropTypes.bool.isRequired,
};

export default NoticesComponent;
