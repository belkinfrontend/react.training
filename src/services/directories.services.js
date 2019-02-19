import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const apiGetDirectories = () => {
	return axios
		.get(`${SERVER_URL}/directories`)
		.then(res => console.log(res.data));
};
