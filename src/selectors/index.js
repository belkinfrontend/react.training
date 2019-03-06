import { createSelector } from 'reselect';

export const getDirectoriesSelector = state => {
	return state.direcrories.items;
};

// export const getUnflattenTree = createSelector(
// 	[getDirectoriesSelector],
// 	(direcrories, id) => {
// 		return direcrories.filter(notice => notice.directoryId === id);
// 	}
// );

export function getUnflattenTree(directories) {
	let tree = [],
		mappedArr = {},
		arrElem,
		mappedElem;

	// First map the nodes of the array to an object -> create a hash table.
	for (let i = 0, length = directories.length; i < length; i++) {
		arrElem = directories[i];
		mappedArr[arrElem.id] = arrElem;
		mappedArr[arrElem.id]['children'] = [];
	}

	for (let id in mappedArr) {
		if (mappedArr.hasOwnProperty(id)) {
			mappedElem = mappedArr[id];
			// If the element is not at the root level, add it to its parent array of children.
			if (mappedElem.parentId) {
				mappedArr[mappedElem['parentId']]['children'].push(mappedElem);
			}
			// If the element is at the root level, add it to first level elements array.
			else {
				tree.push(mappedElem);
			}
		}
	}
	return tree;
}

const getNotices = state => state.notices.items;
const getSearchQuery = state => state.notices.searchQuery;

export const getSearchedNoticesSelector = createSelector(
	[getNotices, getSearchQuery],
	(notices, searchQuery) => {
		console.log(notices, searchQuery);

		return notices.filter(notice => notice.title.includes(searchQuery));
	}
);
