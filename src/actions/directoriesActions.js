export function changeDirectoryName(name) {
	return {
		type: 'CHANGE_DIRECTORY_NAME',
		payload: name,
	};
}
