import {
	useApiGetDirectories,
	useApiPostDirectory,
} from '../services/directories.service';

import {
	ADD_NEW_DIRECTORY,
	DIRECTORIES_FETCH_STARTED,
	DIRECTORIES_FETCH_SUCCEED,
	DIRECTORIES_FETCH_FAILED,
	ADD_NEW_DIRECTORY_STARTED,
	ADD_NEW_DIRECTORY_SUCCEED,
	ADD_NEW_DIRECTORY_FAILED,
} from './types';

export function getDirectories() {
	return dispatch => {
		dispatch({ type: DIRECTORIES_FETCH_STARTED });
		useApiGetDirectories()
			.then(result => {
				dispatch({ type: DIRECTORIES_FETCH_SUCCEED, payload: result });
			})
			.catch(error => {
				dispatch({
					type: DIRECTORIES_FETCH_FAILED,
					error: true,
					payload: error.message,
				});
			});
	};
}

export function addNewDirectory(directoryData) {
	return dispatch => {
		useApiPostDirectory(directoryData).then(directory =>
			dispatch({
				type: ADD_NEW_DIRECTORY,
				payload: directory,
			})
		);
	};
}
