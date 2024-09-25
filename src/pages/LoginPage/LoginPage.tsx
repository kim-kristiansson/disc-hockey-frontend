import Button from '../../components/Button/Button'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MainHeader from '../../components/MainHeader/MainHeader'
import SpotifyIcon from '../../dev-utils/icons/SpotifyIcon'

const LoginPage = () => {
    const handleOnClick = () => {
        console.log('Button clicked!')
    }
    return (
        <div className='flex justify-center min-h-screen pt-25vh pb-25vh'>
            <div className='flex flex-col justify-around pl-4 pr-4'>
                <MainHeader />
                <Button
                    type='submit'
                    ariaLabel='Login Button'
                    text='Logga in med Spotify'
                    icon={SpotifyIcon}
                    onClick={handleOnClick}
                />
                <ErrorMessage message='This is an error message' type='error' isVisible={true} />
            </div>
        </div>
    )
}

export default LoginPage
