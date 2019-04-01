import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import history from '../../history';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import LoaderComponent from '../LoaderComponent/LoaderComponent';
import styles from './DirectoriesComponent.module.scss';

export class DirectoriesComponent extends Component {
	getDirectoriesList = directories =>
		directories.map(({ name, id, children }) => {
			return (
				<ul key={id}>
					{id === 1 ? null : (
						<li className={styles.directoryLinks}>
							<span
								style={{ width: '65%', cursor: 'pointer', padding: '10px 0 10px 10px' }}
								onClick={() => {
									history.push(`/directory/${id}`);
								}}
							>
								{name}
							</span>
							<Tooltip title="Delete">
								<Button
									onClick={() => {
										this.props.deleteDirectory(id);
										history.push('/directory/1');
									}}
								>
									<DeleteIcon />
								</Button>
							</Tooltip>
						</li>
					)}
					{children ? <>{this.getDirectoriesList(children)}</> : null}
				</ul>
			);
		});

	render() {
		const { directories } = this.props;

		return (
			<div className={styles.directoriesList}>
				<h1>Directories</h1>
				{this.props.isLoading ? (
					<LoaderComponent />
				) : (
					<>{this.getDirectoriesList(directories)}</>
				)}
			</div>
		);
	}
}

DirectoriesComponent.propTypes = {
	directories: PropTypes.array.isRequired,
	directory: PropTypes.object,
	isLoading: PropTypes.bool.isRequired,
	deleteDirectory: PropTypes.func,
};

export default withRouter(DirectoriesComponent);
