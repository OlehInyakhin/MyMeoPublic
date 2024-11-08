import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { BackendError } from '@/@types';
import { LoginPayload, LoginResponse, AuthCallbackPayload, AuthCallbackResponse } from '@/feature/authorization/types';
import { login, loginWithGoogle, authCallback } from '@/feature/authorization/api/login/login.api';
import { LoginQueryKeys } from '@/feature/authorization/api/login/login.queryKeys';

export const useLogin = () =>
  useMutation<AxiosResponse<void>, BackendError, LoginPayload>({
    mutationKey: [LoginQueryKeys.useLogin],
    mutationFn: login,
  });

export const useLoginWithGoogle = () =>
  useMutation<AxiosResponse<LoginResponse>, BackendError>({
    mutationKey: [LoginQueryKeys.useLoginWithGoogle],
    mutationFn: loginWithGoogle,
    onSuccess: (response) => {
      const { auth_link } = response.data;
      if (auth_link) window.location.assign(auth_link);
    },
  });

export const useAuthCallback = () =>
  useMutation<AxiosResponse<AuthCallbackResponse>, BackendError, AuthCallbackPayload>({
    mutationKey: [LoginQueryKeys.useLogin],
    mutationFn: authCallback,
  });