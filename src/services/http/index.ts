import axios, {AxiosResponse, InternalAxiosRequestConfig} from "axios";

export const httpClient = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
});

httpClient.interceptors.response.use((response: AxiosResponse):AxiosResponse  => {
    const authRegExp = new RegExp('/login|/register');

    let isAuthUrl;
    if(response.config.url) {
       isAuthUrl = authRegExp.test(response.config.url);
    }

    if (isAuthUrl) {
        const { token } = response.data;
        if (token) {
            window.localStorage.setItem('token', token);
        }
    }

    return response;
})

httpClient.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
        // @ts-ignore
        request.headers = { ...request.headers, Authorization: `Bearer ${token}` };
    }

    return request;
});