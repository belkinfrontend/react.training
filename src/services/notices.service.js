import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const useApiGetNotices = () => {
	return axios.get(`${SERVER_URL}/notices`).then(res => res.data);
};

export const useApiPostNotice = noticeData => {
	return fetch(`http://localhost:3000/notices`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(noticeData),
	}).then(res => res.json());
};

//  Delete Directory
export const useApiDeleteNotice = id => {
	return axios.delete(`${SERVER_URL}/notices/${id}`).then(res => res.data);
};

//  Edit Directory
export const useApiEditNotice = id => {
	return axios.put(`${SERVER_URL}/notices/${id}`).then(res => res.data);
};
