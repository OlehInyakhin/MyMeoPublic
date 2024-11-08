export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  auth_link: string;
};

export type AuthCallbackPayload = {
  code: string;
  url: string;
};

export type AuthCallbackResponse = {
  code: string;
  url: string;
};
