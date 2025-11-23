/* import useAuthStore from '@/shared/store/authStore/useAuthStore' */
import axios, { AxiosInstance } from 'axios'
import BASE_URL from './apiConfig'
export const fetchApi: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
export const fetchApiWithoutToken: AxiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
fetchApi.interceptors.request.use(
    (config) => {
        /*  const accessToken = useAuthStore.getState().accessToken
         const refreshToken = useAuthStore.getState().refreshToken */
        /*   const tokensData = { accessToken, refreshToken } */
        /* if (tokensData.accessToken) {
            config.headers['Authorization'] = `Bearer ${tokensData.accessToken}`
        } */
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
fetchApi.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data)
    },
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            error.request.responseURL.search('auth/login/') === -1
        ) {
            originalRequest._retry = true
            try {

                return fetchApi(originalRequest)
            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }

        if (error.response.data) {
            return Promise.reject(error.response.data)
        }

        return Promise.reject(error)
    },
)
fetchApiWithoutToken.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
fetchApiWithoutToken.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data)
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            try {
                return fetchApiWithoutToken(originalRequest)
            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }

        if (error.response.data) {
            return Promise.reject(error.response.data)
        }

        return Promise.reject(error)
    },
)
