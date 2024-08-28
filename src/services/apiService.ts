import axios, { AxiosResponse } from 'axios'

interface ApiResponse<T> {
    data: T
    status: number
    message: string
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<ApiResponse<T>> = await api.get(endpoint)
        return response.data
    } catch (error) {
        throw error
    }
}

export const postData = async <T, U>(endpoint: string, data: U): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<ApiResponse<T>> = await api.post(endpoint, data)
        return response.data
    } catch (error) {
        throw error
    }
}
