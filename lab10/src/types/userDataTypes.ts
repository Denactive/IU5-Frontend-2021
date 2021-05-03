export enum UserDataActionTypes {
    FETCH_USER_DATA_REQUEST = 'FETCH_USER_DATA_REQUEST',
    FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS',
    FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA_ERROR',
    //FETCH_BEGIN = 'FETCH_BEGIN'
}

export interface UserDataType {
    name: null | string;
    userName: null | string;
    avatar: null | string;
    repos: number;
}

interface FetchUserDataRequestAction {
    type: UserDataActionTypes.FETCH_USER_DATA_REQUEST;
}
interface FetchUserDataSuccessAction {
    type: UserDataActionTypes.FETCH_USER_DATA_SUCCESS;
    payload: UserDataType;
}
interface FetchUserDataErrorAction {
    type: UserDataActionTypes.FETCH_USER_DATA_ERROR;
    payload: string;
}
// interface FetchBegin {
//     type: UserDataActionTypes.FETCH_BEGIN;
// }

export type UserDataAction = FetchUserDataErrorAction | FetchUserDataRequestAction | FetchUserDataSuccessAction; // | FetchBegin;

export interface UserDataState {
    data: UserDataType;
    error: null | string;
    loading: boolean;
}