import Button from '../../../components/Button/Button'
import SpotifyIcon from '../../../dev-utils/icons/SpotifyIcon'

const LoginButton = () => {
    function handleOnClick(): void {
        window.location.href = 'https://localhost:5001/api/spotify/login'
    }

    return (
        <Button
            type='submit'
            ariaLabel='Login Button'
            text='Logga in med Spotify'
            icon={SpotifyIcon}
            onClick={handleOnClick}
        />
    )
}

export default LoginButton
