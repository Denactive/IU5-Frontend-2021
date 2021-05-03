export enum SearchActionTypes {
    FIELD_CLEAR = 'FIELD_CLEAR',
    FIELD_UPDATE = 'FIELD_UPDATE'
}

interface SearchUpdateAction {
    type: SearchActionTypes.FIELD_UPDATE;
    payload: string;
}

interface SearchClearAction {
    type: SearchActionTypes.FIELD_CLEAR;
}

export type SearchAction = SearchUpdateAction | SearchClearAction;

export interface SearchState {
    searchText: string;
}