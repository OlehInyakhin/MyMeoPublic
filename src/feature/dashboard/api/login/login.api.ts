import { api } from '@/api/axios';
import {
  InitAbsherPayload,
  PreAuthenticatePayload,
  OTPPayload,
  LoginPayload,
} from '@/feature/authorization/types';
import { getEnvVar } from '@/utils';

const authApi = getEnvVar('VITE_AUTH_API');

export const preAuthenticate = async (payload: PreAuthenticatePayload) => {
  await api.post(`${authApi}/account/pre-authenticate`, payload);
};

export const initAbsher = async (payload: InitAbsherPayload) => {
  await api.post(`${authApi}/absher/init-absher-validation`, payload);
};
export const validateAbsher = async (payload: OTPPayload) => {
  await api.post(`${authApi}/absher/validate-absher`, payload);
};

export const login = async (payload: LoginPayload) => {
  const data = await api.post(
    `${authApi}/login`,
    `nationalId=${payload.nationalId}&password=${payload.password}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  if (data?.headers?.location) window.location.replace(data.headers.location);
  return data;
};
