import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'/*'remote-redux-devtools'*/;
import thunk from 'redux-thunk'
import { userDataReducer } from './userData'
import { userSearchReducer } from './userSearch';

export const appReducer = combineReducers({
    user: userDataReducer,
    search: userSearchReducer
})

export type AppState = ReturnType<typeof appReducer>

  // Store
export const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
);