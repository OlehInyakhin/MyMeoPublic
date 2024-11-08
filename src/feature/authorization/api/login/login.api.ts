import { api } from '@/api/axios';
import {
  LoginPayload,
  LoginResponse,
  AuthCallbackResponse,
  AuthCallbackPayload,
} from '@/feature/authorization/types';

export const loginWithGoogle = async () => {
  const data = await api.get<LoginResponse>('/login');
  return data;
};

export const authCallback = async (payload: AuthCallbackPayload) => {
  const data = await api.get<AuthCallbackResponse>('/callback', payload);
  return data;
};

export const login = async (payload: LoginPayload) => {
  const data = await api.post('/login', payload, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (data?.headers?.location) window.location.replace(data.headers.location);
  return data;
};
