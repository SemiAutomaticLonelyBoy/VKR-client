import { httpClient } from '../../services/http';

export const requestUser = () => {
    return httpClient
        .get('/user')
        .then(({ data }) => data)
        .catch();
};
export const requestLogin = (data) => {
    return httpClient.post('/auth/login', data);
};
export const requestRegister = (data) => {
    return httpClient.post('/auth/registration', data);
};
export const requestDeleteTable = (tableName) => {
    return httpClient.delete(`/tables/${tableName}`)
}
export const requestAddTable = (data) => {
    return httpClient.post('/tables', data)
}
export const requestAll = () => {
    return httpClient.get()
}
export const requestAddProject = (data) => {
    return httpClient.post('/projects', data)
}
export const requestDeleteProject = (projectName) => {
    return httpClient.delete(`/projects/${projectName}`)
}