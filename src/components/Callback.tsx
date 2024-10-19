// src/components/AuthCallback.jsx
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Callback = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleAuth = async () => {
            const params = new URLSearchParams(location.search)
            const code = params.get('code')
            const state = params.get('state')

            // Send code to backend to exchange for tokens
            const response = await axios.get(
                `http://localhost:8000/auth/callback?code=${code}&state=${state}`
            )

            // Store tokens (use context or state management)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)

            navigate('/dashboard')
        }

        handleAuth()
    }, [location, navigate])

    return <div>Loading...</div>
}

export default Callback
