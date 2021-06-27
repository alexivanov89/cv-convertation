import axios from 'axios';
import { baseUrl } from '../constants/constants';

export default axios.create({
    baseURL: baseUrl,
});
