import axios from "axios";

//* Backend server setup start
// For development
 //const baseURL = 'http://localhost:3001'; // Change this to your Node.js server URL in development mode

// For production
const baseURL = 'https://newswire-server-9nfd.onrender.com'; // Change this to your Node.js server URL in production mode

const api = axios.create({
    baseURL: baseURL
});
//! End

export default api