export interface LoginDataInterface {
  loginForm: string;
  passwordForm: string;
  rememberMeForm: boolean;
}

export interface TokenResponseInterface {
  token: string;
  refreshToken: string;
}
