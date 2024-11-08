import { AxiosError, AxiosResponse } from 'axios';
import { api } from './axios';
import { queryClient } from '@/api/queryClient';

const setupAxiosInterceptors = () => {
  const onResponseSuccess = async (response: AxiosResponse) => {
    return response;
  };
  const onResponseError = (err: AxiosError) => {
    if (err?.response?.status === 401) {
      queryClient.clear();
    }
    throw err;
  };
  api.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
