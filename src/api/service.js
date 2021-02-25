import axios from 'axios';
import Qs from "qs"
const service = axios.create({
  // 请求地址和网页地址不同
  baseURL: "",
  timeout: 500000,
});
console.log()
service.interceptors.request.use(
  config => {
    config.data = Qs.stringify(config.data)
    return config
  },
  error => {
    console.log(error, 'err');
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 0) {
      // Message({
      //   message: res.msg || 'error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(res.msg || 'error');
    } else {
      return res;
    }
  },
  error => {
    console.log(error, 'error');
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service;
