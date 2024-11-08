import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';
import { BackendError } from '@/@types';

export type ToastVariant = 'success' | 'info' | 'error';

export type SetToastArgs = {
  title: string | BackendError;
  text?: string;
  variant: ToastVariant;
};

type ToastStore = {
  show: boolean;
  title: string | BackendError;
  text: string;
  variant: ToastVariant;
  setToast: (args: SetToastArgs) => void;
  setShow: (show: boolean) => void;
};

export const toastStore = proxy<ToastStore>({
  show: false,
  title: '',
  text: '',
  variant: 'success',
  setToast: (args) => {
    const { variant, title, text = '' } = args;
    toastStore.title = title;
    toastStore.text = text;
    toastStore.variant = variant;
  },
  setShow: (show) => {
    toastStore.show = show;
  },
});

export const useToastStore = () => useSnapshot(toastStore);

devtools(toastStore, { name: 'toastStore', enabled: true });
