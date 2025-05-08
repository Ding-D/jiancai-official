// export const getNavList

import axios from 'axios';

const request = axios.create({
  baseURL: '/api/web',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default request;
