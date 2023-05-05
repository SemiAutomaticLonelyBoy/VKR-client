import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    ADD_PROJECT_TO_STATE,
    ADD_TABLE_TO_STATE, DELETE_PROJECT_FROM_STATE,
    DELETE_TABLE_FROM_STATE,
    FETCH_USER,
    INIT_STATE,
    LOGIN,
    REGISTER
} from "./actionTypes";
import {
    requestAddProject,
    requestAddTable,
    requestAll,
    requestDelete, requestDeleteProject, requestDeleteTable,
    requestLogin,
    requestRegister,
    requestUser
} from "./services";
import {fetchUser, setUser} from "./actions";

export function* requestUserDataWorker() {
    let response = yield call(requestUser);
    yield put(setUser(response));
}
export function* requestUserLogin(action) {
    try {
        yield call(requestLogin, action.payload.data);
        yield put(fetchUser());
        action.payload.onDone();
    } catch (error) {
        console.log(error)
        // yield put(loadLoginError(error.response.data.errors));
    }
}

export function* requestUserRegister(action) {
    try {
        yield call(requestRegister, action.payload.data);
        action.payload.onDone();
    } catch (error) {
        // yield put(loadRegisterError(error.response.data.errors.email));
    }
}

export function* getUser() {
    if (localStorage.getItem('token')) {
        yield put(fetchUser());
    }
}

export function* requestTableDelete(action) {
    try {
        yield call(requestDeleteTable, action.payload.tableName)
    } catch (error) {
        // yield put(loadRegisterError(error.response.data.errors.email));
    }
}

export function* requestTableAdd(action) {
    try {
        yield call(requestAddTable, action.payload.data)
        yield put(fetchUser());
    } catch (error) {
        // yield put(loadRegisterError(error.response.data.errors.email));
    }
}

export function* requestTableAll() {
    try {
        yield call(requestAll)
    }catch (error) {
        // yield put(loadRegisterError(error.response.data.errors.email));
    }
}

export function* requestProjectAdd(action) {
    try {
        yield call(requestAddProject, action.payload.data)
        yield put(fetchUser());
    } catch (error) {
        //yield put(loadRegisterError(error.response.data.errors.email));
    }
}

export function* requestProjectDelete(action) {
    try {
        yield call(requestDeleteProject, action.payload.projectName)
    } catch (error) {
        // yield put(loadRegisterError(error.response.data.errors.email));
    }
}
export function* sagaUser() {
    yield all([
        takeLatest(LOGIN, requestUserLogin),
        takeLatest(INIT_STATE, getUser),
        takeLatest(FETCH_USER, requestUserDataWorker),
        takeLatest(REGISTER, requestUserRegister),
        takeLatest(DELETE_TABLE_FROM_STATE, requestTableDelete),
        takeLatest(ADD_TABLE_TO_STATE, requestTableAdd),
        takeLatest(ADD_PROJECT_TO_STATE, requestProjectAdd),
        takeLatest(DELETE_PROJECT_FROM_STATE, requestProjectDelete)
    ]);
}