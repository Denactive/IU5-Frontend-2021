export type UserData_t = {
  name: string,
  login: string,
  public_repos: string,
  avatar_url: string
}

export enum UserDataActionTypes {
  FETCH_USER_ERROR = "@@cart/FETCH_USER_ERROR",
  FETCH_USER_NOT_FOUND = "@@cart/FETCH_USER_NOT_FOUND",
  FETCH_USER_SUCCESS = "@@cart/FETCH_USER_SUCCESS",
  FETCH_USER_REQUEST = "@@cart/FETCH_USER_REQUEST",
}

export interface UserState {
  loading: boolean;
  data: UserData_t;
  errors?: string;
}

export const initialState: UserState = {
  data: {
    name: '',
    login: '',
    public_repos: '0',
    avatar_url: ''
  },
  errors: undefined,
  loading: false
};

export interface IError {
  msg: string;
}
interface IName {
  name: string;
}
interface IUsername {
  login: string;
}
interface IRepos {
  amount: number;
}
interface IAvatar {
  url: string;
}
