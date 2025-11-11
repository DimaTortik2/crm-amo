import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://amoform.onrender.com',
});

export { instance };
