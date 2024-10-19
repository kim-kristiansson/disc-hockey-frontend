// src/components/Player.jsx
import React, { useEffect } from 'react'

const Player = () => {
    useEffect(() => {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = localStorage.getItem('access_token')
            const player = new window.Spotify.Player({
                name: 'Spotify Playlist App Player',
                getOAuthToken: (cb) => {
                    cb(token)
                },
            })

            // Error handling
            player.addListener('initialization_error', ({ message }) => {
                console.error(message)
            })
            player.addListener('authentication_error', ({ message }) => {
                console.error(message)
            })
            player.addListener('account_error', ({ message }) => {
                console.error(message)
            })
            player.addListener('playback_error', ({ message }) => {
                console.error(message)
            })

            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id)
                // Save device_id for controlling playback
                localStorage.setItem('device_id', device_id)
            })

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id)
            })

            // Connect to the player!
            player.connect()
        }
    }, [])

    return <div>Spotify Player</div>
}

export default Player
