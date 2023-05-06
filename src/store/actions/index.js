import axios from 'axios';

//* Backend server setup start
// For development
// const baseURL = 'http://localhost:3001'; // Change this to your Node.js server URL in development mode

// For production
const baseURL = 'https://newswire-server-9nfd.onrender.com'; // Change this to your Node.js server URL in production mode

const api = axios.create({
    baseURL: baseURL
});
//! End

const getNewsItemsHelper = async () => {
	try {
		const response = await api.get('/api/news');
		return {
			news: response.data
		};
	} catch (error) {
		throw error;
	}
};

const getNewsItemByIdHelper = async (id) => {
	try {
		const response = await axios.get(`/api/news/${id}`);
		return {
			newsItem: response.data
		};
	} catch (error) {
		throw error;
	}
};

export const getNewsItems = () => {
	return {
		type: 'get_news',
		payload: getNewsItemsHelper()
	};
};

export const getNewsItemById = (id) => {
	return {
		type: 'get_news_by_id',
		payload: getNewsItemByIdHelper(id)
	};
};