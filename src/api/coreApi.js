import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default coreApi;