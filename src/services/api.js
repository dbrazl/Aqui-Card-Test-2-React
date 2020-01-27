import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://aquicardtest2-env.b24mpccuqa.us-east-1.elasticbeanstalk.com/:80',
});

export default api;
