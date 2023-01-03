import axios from 'axios';

export interface R<T> {
  code: number;
  data: T;
  message?: string;
}

export type Res<T> = Promise<R<T>>;

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  withCredentials: true
});

instance.interceptors.request.use(
  (config) => {
    console.log(
      'req ' +
        JSON.stringify(
          {
            url: config.url,
            data: config.data,
            params: config.params
          },
          null,
          4
        )
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
