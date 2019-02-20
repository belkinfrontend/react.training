import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '@material-ui/icons/Description';

import { apiGetDirectories } from '../services/directories.services';
import { apiGetNotices } from '../services/notices.services';

// export const CHANGE_NAME = 'CHANGE_NAME';

class TestComponent extends Component {
	render() {
		const { notices } = this.props.notices;
		return (
			<div>
				<h2>Corporative component</h2>
				<h4>======= from store!!!</h4>
				<p>directoryId: {notices.directoryId}</p>
				<p>title: {notices.title}</p>
				<p>id: {notices.id}</p>
				<p>description: {notices.description}</p>
				<h4>=======</h4>
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
		directories: store.directories,
		notices: store.notices,
	};
};

export default connect(mapStateToProps)(TestComponent);
