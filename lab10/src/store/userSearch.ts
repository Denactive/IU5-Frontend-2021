import {Dispatch} from "redux"
import {SearchAction, SearchState, SearchActionTypes} from '../types/userSearchTypes'

// action creator
export const searchActionCreator = (text: string) => {
    return (dispatch: Dispatch<SearchAction>) => {

    }
};

// action
export const clear = (() => {
    return {
        type: SearchActionTypes.FIELD_CLEAR
    }
})
// action
export const update = ((x: string | undefined) => {
    console.log("in update | x: " + x)

    if (x === undefined) x = '';
    return {
        type: SearchActionTypes.FIELD_UPDATE,
        payload: x
    }
})

// reducer
const initialState: SearchState = {
    searchText: ''
}

export const userSearchReducer = (state: SearchState = initialState, action: SearchAction): SearchState => {
    switch(action.type) {
        case SearchActionTypes.FIELD_CLEAR:
            return {
                searchText: ''
            }
        case SearchActionTypes.FIELD_UPDATE:
            return {
                searchText: action.payload
            }

        default:
            return state;
    }
}