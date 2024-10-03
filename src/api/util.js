import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';

// const instance = axios.create({
//     // baseURL: 'http://192.168.1.37:8800/api/',
//     baseURL: 'http://192.168.1.37:8800/api/',
//     timeout: 8000,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })
// const callApi = []
const instance = axios.create({
  baseURL: 'https://demo-be-miniproject-production.up.railway.app/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Request-Headers': '*'
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': '*',
  }
});
// Add a request interceptor
instance.interceptors.request.use(function (request) {
  const token = getLocalAccessToken()
  if (request.url.includes('/authorization/login')) {
    return request
  }
  request.headers['Authorization'] = `Bearer ${token}`;

  return request;
},
  function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  if (response.status === 401) {
    alert("You are not authorized");
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});
export default instance;

export const setLocalAccessToken = (token) => {
  window.localStorage.setItem('accessToken', token);
}
const getLocalAccessToken = () => {
  return window.localStorage.getItem('accessToken');
  // console.log({accessToken})
  // return JSON.parse(accessToken);
}
export const refreshToken = () => {

}