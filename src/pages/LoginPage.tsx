import Button from '../components/Button/Button'
import MainHeader from '../components/MainHeader/MainHeader'
import SpotifyIcon from '../dev-utils/icons/SpotifyIcon'

const LoginPage = () => {
    const handleOnClick = () => {
        console.log('Button clicked!')
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <MainHeader />
            <Button
                type='submit'
                ariaLabel='Login Button'
                text='Logga in med Spotify'
                icon={SpotifyIcon}
                onClick={handleOnClick}
            />
        </div>
    )
}

export default LoginPage
