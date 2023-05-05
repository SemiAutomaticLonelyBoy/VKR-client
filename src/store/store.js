import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootSaga} from "./rootSaga";
import {appReducer} from "../ducks/app/appReducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    app: appReducer,
    // users: usersReducer,
    // article: articleReducer,
});

const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);