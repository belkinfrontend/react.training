import {
	useApiGetDirectories,
	useApiPostDirectory,
	useApiDeleteDirectory,
} from '../services/directories.service';

import {
	DIRECTORIES_FETCH_STARTED,
	DIRECTORIES_FETCH_SUCCEED,
	DIRECTORIES_FETCH_FAILED,
	ADD_NEW_DIRECTORY_STARTED,
	ADD_NEW_DIRECTORY_SUCCEED,
	ADD_NEW_DIRECTORY_FAILED,
	DELETE_DIRECTORY_STARTED,
	DELETE_DIRECTORY_SUCCEED,
	DELETE_DIRECTORY_FAILED,
} from './types';

//================ getDirectories

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

//================ addNewDirectory

export function addNewDirectory(directoryData) {
	return dispatch => {
		dispatch({ type: ADD_NEW_DIRECTORY_STARTED });
		useApiPostDirectory(directoryData)
			.then(directory =>
				dispatch({
					type: ADD_NEW_DIRECTORY_SUCCEED,
					payload: directory,
				})
			)
			.catch(error => {
				dispatch({
					type: ADD_NEW_DIRECTORY_FAILED,
					error: true,
					payload: error.message,
				});
			});
	};
}

//================ deleteDirectory

export function deleteDirectory(id) {
	return dispatch => {
		dispatch({ type: DELETE_DIRECTORY_STARTED });
		useApiDeleteDirectory(id)
			.then(() =>
				dispatch({
					type: DELETE_DIRECTORY_SUCCEED,
					payload: id,
				})
			)
			.catch(error => {
				dispatch({
					type: DELETE_DIRECTORY_FAILED,
					error: true,
					payload: error.message,
				});
			});
	};
}
