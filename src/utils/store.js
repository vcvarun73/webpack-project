import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserReducer } from '../Store/reducer';

const rootReducer = combineReducers({
    UserReducer
});

export const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk))
);
