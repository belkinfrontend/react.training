import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000';

export const useApiGetNotices = () => {
	return axios.get(`${SERVER_URL}/notices`).then(res => res.data);
};

// export const useApiPostNotice = notice => {
// 	fetch(`http://localhost:3000/notices`, {
// 		method: 'POST',
// 		headers: {
// 			'content-type': 'application/json',
// 		},
// 		body: JSON.stringify(notice),
// 	})
// 		.then(res => res.json())
// 		.then(data => console.log(data));
// 	return axios.post(`${SERVER_URL}/notices`).then(res => res.data);
// };

//  Delete Directory
export const useApiDeleteNotice = id => {
	return axios.delete(`${SERVER_URL}/notices/${id}`).then(res => res.data);
};
