import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const useApiGetNotices = () => {
	return axios.get(`${SERVER_URL}/notices`).then(res => res.data);
};

export const useApiPostNotice = noticeData => {
	return fetch(`${SERVER_URL}/notices`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(noticeData),
	}).then(res => res.json());
};

//  Delete Notice
export const useApiDeleteNotice = id => {
	return axios.delete(`${SERVER_URL}/notices/${id}`).then(res => res.data);
};

// //  Edit Notice
// export const useApiEditNotice = id => {
// 	return axios.put(`${SERVER_URL}/notices/${id}`).then(res => res.data);
// };

// // Edit Notice
// export const useApiEditNotice = noticeData => {
// 	return fetch(`${SERVER_URL}/notices/${noticeData.id}`, {
// 		method: 'PUT',
// 		headers: {
// 			'content-type': 'application/json',
// 		},
// 		body: JSON.stringify(noticeData),
// 	}).then(res => res.json());
// };

export const useApiEditNotice = noticeData => {
	return axios
		.put(`${SERVER_URL}/notices/${noticeData.id}`, noticeData)
		.then(res => res.data);
};

//  Reorder Notices
export const useApiReorderNotices = noticeData => {
	return axios
		.put(`${SERVER_URL}/notices/${noticeData.id}`, noticeData)
		.then(res => res.data);
};
