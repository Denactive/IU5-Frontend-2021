import {Dispatch} from "redux"
import {UserDataAction, UserDataState, UserDataActionTypes} from '../types/userDataTypes'

// action creators
export const fetchUserDataActionCreator = (text: string | undefined) => {
    console.log("fetchUserDataActionCreator | text: " + text)
    return (dispatch: Dispatch<UserDataAction>) => {
        dispatch({type: UserDataActionTypes.FETCH_USER_DATA_REQUEST})
        console.log("Creating a request: " + text);
        
        fetch('https://api.github.com/users/' + text)
        .then((result) => result.json())
        .then((data) => {
            console.log(
                'data.message: ' + data.message +
                '\ndata.name: ' + data.name +
                '\ndata.login: ' + data.login +
                '\ndata.avatar_url: ' + data.avatar_url +
                '\nstate.repos: ' +  data.repos
                );
            dispatch({
                type: UserDataActionTypes.FETCH_USER_DATA_SUCCESS,
                payload: {
                    name: data.name,
                    userName: data.login,
                    avatar: data.avatar_url,
                    repos: parseInt(data.public_repos, 10)
                }
            })
        })
        .catch((err) =>
            dispatch({
                type: UserDataActionTypes.FETCH_USER_DATA_ERROR,
                payload: err.message
            })
        );
    }
}

// reducer
const initialState: UserDataState = {
    data: {
        name: null,
        userName: null,
        avatar: null,
        repos: 0,
    },
    error: null,
    loading: false
}

export const userDataReducer = (state = initialState, action: UserDataAction): UserDataState => {
    switch(action.type) {
        case UserDataActionTypes.FETCH_USER_DATA_REQUEST:
            return { loading: true, error: null, data: {name: null, userName: null, avatar: null, repos: 0} };
        case UserDataActionTypes.FETCH_USER_DATA_SUCCESS:
            return { loading: false, error: null, data: {name: action.payload.name, userName: action.payload.userName, avatar: action.payload.avatar, repos: action.payload.repos} };
        case UserDataActionTypes.FETCH_USER_DATA_ERROR:
            return { loading: false, error: action.payload, data: {name: null, userName: null, avatar: null, repos: 0} };

        default:
            return state;
    }
}