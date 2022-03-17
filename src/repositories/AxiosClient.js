import Axios from 'axios';

import { APP_URL_API } from '../config';

const AxiosClient = Axios.create({
  baseURL: APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosClient.interceptors.request.use(
  async (config) => {
    try {
      // const token = await AsyncStorage.getItem('@token');
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }
      return config;
    } catch (e) {
      return config;
    }
  },
  (error) => {
    Promise.reject(error);
  },
);

AxiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      // handle logout
      // store.dispatch(requestLogout());
    }
    return Promise.reject(error);
  },
);

export default AxiosClient;
