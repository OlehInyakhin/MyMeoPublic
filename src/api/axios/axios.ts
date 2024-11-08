import axios from 'axios';
import { getEnvVar } from '@/utils';

axios.defaults.withCredentials = false;

export const api = axios.create({
  baseURL: getEnvVar('VITE_API_URL'),
  // headers: {
    // 'Content-Type': 'application/json',
    // 'Authorization': `Token`
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'include',
    // redirect: 'follow',
    // referrerPolicy: 'unsafe-url',
  // },
});
