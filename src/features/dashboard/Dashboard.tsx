import { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [playlists, setPlaylists] = useState([])
    const [newPlaylist, setNewPlaylist] = useState({
        name: '',
        description: '',
    })

    const accessToken = localStorage.getItem('access_token')

    useEffect(() => {
        fetchPlaylists()
    }, [])

    const fetchPlaylists = async () => {
        const response = await axios.get(
            `http://localhost:8000/playlists?userId=USER_ID`, // Replace USER_ID accordingly
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        setPlaylists(response.data)
    }

    const handleCreatePlaylist = async () => {
        const response = await axios.post(
            'http://localhost:8000/playlists',
            { ...newPlaylist, userId: 'USER_ID' }, // Replace USER_ID accordingly
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        )
        setPlaylists([...playlists, response.data])
        setNewPlaylist({ name: '', description: '' })
    }

    return (
        <div>
            <h1>Your Playlists</h1>
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id}>{playlist.name}</li>
                ))}
            </ul>
            <h2>Create New Playlist</h2>
            <input
                type='text'
                placeholder='Name'
                value={newPlaylist.name}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
            />
            <input
                type='text'
                placeholder='Description'
                value={newPlaylist.description}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, description: e.target.value })}
            />
            <button onClick={handleCreatePlaylist}>Create</button>
        </div>
    )
}

export default Dashboard
