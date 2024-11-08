import { useMutation } from '@tanstack/react-query';

import { AxiosResponse } from 'axios';
import { BackendError } from '@/@types';
import {
  InitAbsherPayload,
  PreAuthenticatePayload,
  LoginPayload,
  OTPPayload,
} from '@/feature/authorization/types';
import {
  initAbsher,
  login,
  preAuthenticate,
  validateAbsher,
} from '@/feature/authorization/api/login/login.api';
import { LoginQueryKeys } from '@/feature/authorization/api/login/login.queryKeys';

export const usePreAuthenticate = () =>
  useMutation<void, BackendError, PreAuthenticatePayload>({
    mutationKey: [LoginQueryKeys.usePreAuthenticate],
    mutationFn: preAuthenticate,
  });

export const useInitAbsher = () =>
  useMutation<void, BackendError, InitAbsherPayload>({
    mutationKey: [LoginQueryKeys.useInitAbsher],
    mutationFn: initAbsher,
  });

export const useValidateAbsher = () =>
  useMutation<void, BackendError, OTPPayload>({
    mutationKey: [LoginQueryKeys.useValidateAbsher],
    mutationFn: validateAbsher,
  });
export const useLogin = () =>
  useMutation<AxiosResponse<void>, BackendError, LoginPayload>({
    mutationKey: [LoginQueryKeys.useLogin],
    mutationFn: login,
  });
