import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';

type UserStore = {
  loggedIn: boolean | null;
  sessionExpired: boolean | null;
  name: string;
  setUserName: (name: string) => void;
  setLoggedIn: (val: boolean | null) => void;
  setSessionExpired: (val: boolean) => void;
};

export const userStore = proxy<UserStore>({
  loggedIn: null,
  sessionExpired: null,
  name: '',
  setUserName: (name) => {
    userStore.name = name;
  },
  setLoggedIn: (val) => {
    userStore.loggedIn = val;
  },
  setSessionExpired: (val) => {
    userStore.sessionExpired = val;
  },
});

export const useUserStore = () => useSnapshot(userStore);

devtools(userStore, { name: 'userStore', enabled: true });
