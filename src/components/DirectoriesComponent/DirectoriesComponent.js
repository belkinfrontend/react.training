import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import history from '../../history';

import ListItemText from '@material-ui/core/ListItemText';
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
							<Link to={`/directory/${id}`}>
								<ListItemText primary={name} />
							</Link>
							<Tooltip title="Delete">
								<Button
									component={Link}
									to="/directory/1"
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
