import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const apiGetDirectories = () => {
	return axios
		.get(`${SERVER_URL}/directories`)
		.then(res => console.log(res.data));
};

export const apiPostDirectories = title => {
	axios
		.post(`${SERVER_URL}/directories`, {
			title,
		})
		.then(res => console.log(res.data));
};

export const apiDeleteDirectories = id => {
	axios
		.delete(`${SERVER_URL}/directories/${id}`)
		.then(res => console.log(res.data));
};
