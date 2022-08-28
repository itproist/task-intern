import axios, { AxiosRequestConfig } from 'axios';

const request = async ({ url, method = 'GET', data = {}, params = {} }: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      baseURL: 'https://rickandmortyapi.com/api',
      timeout: 10000,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default request;