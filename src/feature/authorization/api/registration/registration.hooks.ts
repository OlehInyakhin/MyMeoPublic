import { useMutation } from '@tanstack/react-query';

import { BackendError } from '@/@types';
import {
  ValidateNationalIdPayload,
  OTPPayload,
  EmailPayload,
  MobileNumberPayload,
  CreateAccountPayload,
} from '@/feature/authorization/types';
import {
  validateNationalId,
  initAbsher,
  validateAbsher,
  validateEstablishments,
  validateEmail,
  initMobile,
  validateMobile,
  createAccount,
} from '@/feature/authorization/api/registration/registration.api';
import { RegistrationQueryKeys } from '@/feature/authorization/api/registration/registration.queryKeys';

export const useValidateNationalId = () =>
  useMutation<void, BackendError, ValidateNationalIdPayload>({
    mutationKey: [RegistrationQueryKeys.useValidateNationalId],
    mutationFn: validateNationalId,
  });

export const useValidateEstablishments = () =>
  useMutation<void, BackendError>({
    mutationKey: [RegistrationQueryKeys.useInitAbsher],
    mutationFn: validateEstablishments,
  });

export const useInitAbsher = () =>
  useMutation<void, BackendError>({
    mutationKey: [RegistrationQueryKeys.useInitAbsher],
    mutationFn: initAbsher,
  });

export const useValidateEmail = () =>
  useMutation<void, BackendError, EmailPayload>({
    mutationKey: [RegistrationQueryKeys.useValidateEmail],
    mutationFn: validateEmail,
  });

export const useValidateAbsher = () =>
  useMutation<void, BackendError, OTPPayload>({
    mutationKey: [RegistrationQueryKeys.useValidateAbsher],
    mutationFn: validateAbsher,
  });

export const useInitMobile = () =>
  useMutation<void, BackendError, MobileNumberPayload>({
    mutationKey: [RegistrationQueryKeys.useInitMobile],
    mutationFn: initMobile,
  });

export const useValidateMobile = () =>
  useMutation<void, BackendError, OTPPayload>({
    mutationKey: [RegistrationQueryKeys.useValidateMobile],
    mutationFn: validateMobile,
  });

export const useCreateAccount = () =>
  useMutation<void, BackendError, CreateAccountPayload>({
    mutationKey: [RegistrationQueryKeys.useCreateAccount],
    mutationFn: createAccount,
  });
