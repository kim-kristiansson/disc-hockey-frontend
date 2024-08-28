import { useState } from 'react'
import { getData, postData } from '../services/apiService'

export const useApi = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    const fetchData = async <T>(endpoint: string): Promise<T | null> => {
        setLoading(true)
        setError(null)
        try {
            const response = await getData<T>(endpoint)
            return response.data
        } catch (err) {
            setError('Failed to fetch data')
            return null
        } finally {
            setLoading(false)
        }
    }

    const postDataToApi = async <T, U>(endpoint: string, data: U): Promise<T | null> => {
        setLoading(true)
        setError(null)
        try {
            const response = await postData<T, U>(endpoint, data)
            return response.data
        } catch (err) {
            setError('Failed to post data')
            return null
        } finally {
            setLoading(false)
        }
    }

    return { fetchData, postDataToApi, loading, error }
}
