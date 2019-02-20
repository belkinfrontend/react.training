const initialState = {
	directories: {
		id: 2,
		parentId: 1,
		name: 'folder-jevo-GGG',
	},
};

export function directoriesReducer(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_DIRECTORY_NAME':
			return { ...state, name: action.payload };

		default:
			return state;
	}
}
