import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-d5726.firebaseio.com/'
});

export default instance;