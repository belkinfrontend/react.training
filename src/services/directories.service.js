import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const useApiGetDirectories = () => {
	return axios.get(`${SERVER_URL}/directories`).then(res => res.data);
};

export const useApiPostDirectory = directoryData => {
	return fetch(`http://localhost:3000/directories`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(directoryData),
	}).then(res => res.json());
};

//  Delete Directory
export const useApiDeleteDirectory = id => {
	return axios.delete(`${SERVER_URL}/directories/${id}`).then(res => res.data);
};
