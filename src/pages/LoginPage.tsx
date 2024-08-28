import Button from '../components/Button/Button'
import MainHeader from '../components/MainHeader/MainHeader'
import SpotifyIcon from '../dev-utils/icons/SpotifyIcon'

const LoginPage = () => {
    return (
        <>
            <MainHeader />
            <form onSubmit={() => console.log('submit')}>
                <Button
                    ariaLabel='Dummy Button'
                    onClick={() => {
                        console.log('Click!')
                    }}
                    text='Click Here'
                    icon={SpotifyIcon}
                />
            </form>
        </>
    )
}

export default LoginPage
