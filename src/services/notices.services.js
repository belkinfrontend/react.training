import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const apiGetNotices = () => {
	return axios.get(`${SERVER_URL}/notices`).then(res => console.log(res.data));
};
