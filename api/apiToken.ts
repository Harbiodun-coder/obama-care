import axios from 'axios';

const apiToken = axios.create({
  baseURL: 'https://your-api-base-url.com', 
});

export default apiToken;
