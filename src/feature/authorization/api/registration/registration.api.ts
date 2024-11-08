import { api } from '@/api/axios';
import {
  ValidateNationalIdPayload,
  OTPPayload,
  CreateAccountPayload,
  MobileNumberPayload,
  EmailPayload,
} from '@/feature/authorization/types';
import { getEnvVar } from '@/utils';

const authApi = getEnvVar('VITE_AUTH_API');

export const validateNationalId = async (payload: ValidateNationalIdPayload) => {
  await api.post(`${authApi}/registration/validate-national-id`, payload);
};

export const initAbsher = async () => {
  await api.post(`${authApi}/registration/init-absher-validation`);
};

export const initMobile = async (payload: MobileNumberPayload) => {
  await api.post(`${authApi}/registration/init-mobile-validation`, payload);
};

export const validateAbsher = async (payload: OTPPayload) => {
  await api.post(`${authApi}/registration/validate-absher`, payload);
};

export const validateEstablishments = async () => {
  await api.post(`${authApi}/registration/validate-establishments`);
};

export const validateEmail = async (payload: EmailPayload) => {
  await api.post(`${authApi}/registration/validate-email`, payload);
};

export const validateMobile = async (payload: OTPPayload) => {
  await api.post(`${authApi}/registration/validate-mobile-number`, payload);
};

export const createAccount = async (payload: CreateAccountPayload) => {
  await api.post(`${authApi}/registration/create-account`, payload);
};
