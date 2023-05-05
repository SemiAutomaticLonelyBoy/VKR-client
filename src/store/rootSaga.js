import { all, call } from 'redux-saga/effects';
import {sagaUser} from "../ducks/app/sagas";

export function* rootSaga() {
    yield all([call(sagaUser), ]);
}