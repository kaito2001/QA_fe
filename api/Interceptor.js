import axios from 'axios';
import JSCookie from 'js-cookie';

const brAxios = axios.create({
  baseURL: 'http://localhost:8082/api/',
  timeout: 10000,
});

const requestHandler = (request) => {
  // token authen
  const authToken = JSCookie.get('token');
  request.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    Authorization: `Bearer ${authToken}`,
  };
  return request;
};

const redirectToLogin = (response) => {
  if (response.status === 401 || response.status === 403) {
    JSCookie.remove('user');
  }
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  const { response } = error;
  redirectToLogin(response);
  return Promise.reject(error);
};

brAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

brAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);


export default {
  get: brAxios.get,
  post: brAxios.post,
  put: brAxios.put,
  delete: brAxios.delete,
  patch: brAxios.patch,
};