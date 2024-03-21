import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'https://braw-mager-d9515b823a62.herokuapp.com/api'
});

export default coreApi;