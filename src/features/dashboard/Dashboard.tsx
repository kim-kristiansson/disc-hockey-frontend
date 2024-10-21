import { useEffect, useState } from 'react'
import api from '../../services/api'

const Dashboard = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/user/me', {
                    withCredentials: true,
                })
                setUser(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser()
    }, [])

    if (isLoading) return <div>Loading...</div>

    return <div>{user ? 'ok' : 'ko'}</div>
}

export default Dashboard
