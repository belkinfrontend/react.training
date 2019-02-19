import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '@material-ui/icons/Description';

import { apiGetDirectories } from '../services/directories.services';
import { apiGetNotices } from '../services/notices.services';

export const CHANGE_NAME = 'CHANGE_NAME';

class Corporative extends Component {
	render() {
		return (
			<div>
				<h2>Corporative component</h2>
				<p>{this.props.note}</p>
				<div>
					<Description />
					<p>Future birthdays</p>
				</div>
			</div>
		);
	}
}
apiGetDirectories();
apiGetNotices();

// data from store
const mapStateToProps = store => {
	console.log(store);

	return {
		user: store.user,
	};
};

export default connect(mapStateToProps)(Corporative);
