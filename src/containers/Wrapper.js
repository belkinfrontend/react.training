import React, { Component } from 'react';
import Notices from './Notices';
import Directories from './Directories';

export class Wrapper extends Component {
	render() {
		const {
			match: {
				params: { id },
			},
		} = this.props;
		return (
			<main>
				<Directories directoryID={id} />
				<Notices directoryID={id} />
			</main>
		);
	}
}

export default Wrapper;
