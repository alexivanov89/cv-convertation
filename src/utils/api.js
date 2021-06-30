import axios from 'axios';

export const baseUrl = 'http://localhost:3006';

export default axios.create({
    baseURL: baseUrl,
});
