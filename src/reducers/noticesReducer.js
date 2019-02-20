const initialState = {
	notices: [
		{
			directoryId: '1',
			title: 'Private',
			description: 'private note',
			tags: [],
			id: 4,
			position: 0,
		},
		{
			directoryId: '1',
			title: 'Family',
			description: 'family note',
			tags: [],
			id: 5,
			position: 0,
		},
	],
};

export function noticesReducer(state = initialState, action) {
	return state;
}
