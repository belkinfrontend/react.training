import React, { Component } from 'react';
import Notices from './Notices';
import Directories from './Directories';
import styled from 'styled-components';

export class Wrapper extends Component {
	render() {
		const Main = styled.main`
			text-align: center;
			display: grid;
			grid-template-columns: 1fr 3fr;
			grid-gap: 2vw;
			padding: 5px;

			@media all and (max-width: 575px) {
				display: grid;
				grid-template-columns: 1fr;
			}
		`;

		const {
			match: {
				params: { id },
			},
		} = this.props;
		return (
			<Main>
				<Directories directoryID={id} />
				<Notices directoryID={id} />
			</Main>
		);
	}
}

export default Wrapper;
