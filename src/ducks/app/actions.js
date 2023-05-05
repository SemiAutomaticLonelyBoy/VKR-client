import {
    ADD_PROJECT_TO_STATE,
    ADD_TABLE_TO_STATE, DELETE_PROJECT_FROM_STATE,
    DELETE_TABLE_FROM_STATE, FETCH_ALL,
    FETCH_USER,
    LOGIN,
    LOGOUT,
    REGISTER,
    SET_USER
} from "./actionTypes";

export const login = (data, onDone) => {
    return { type: LOGIN, payload: { data , onDone} };
};
export const logout = () => {
    return { type: LOGOUT };
};
export const fetchUser = () => {
    return { type: FETCH_USER };
};
export const setUser = (user) => {
    return { type: SET_USER, payload: { user } };
};
export const registration = (data, onDone) => {
    return { type: REGISTER, payload: { data, onDone } };
};
export const deleteTable = (tableName) => {
    return {type: DELETE_TABLE_FROM_STATE, payload: {tableName}}
}
export const addTable = (data) => {
    return {type: ADD_TABLE_TO_STATE, payload: {data}}
}
export const fetchAll = (data) => {
    return {type: FETCH_ALL, payload: {data}}
}
export const addProject = (data) => {
    return {type: ADD_PROJECT_TO_STATE, payload: {data}}
}
export const deleteProject = (projectName) => {
    return {type: DELETE_PROJECT_FROM_STATE, payload: {projectName}}
}