import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import MainHeader from '../../components/MainHeader/MainHeader'
import LoginButton from './components/LoginButton'

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen pt-25vh pb-25vh'>
            <div className='flex flex-col justify-around pl-4 pr-4'>
                <MainHeader />
                <LoginButton />
                <ErrorMessage message='This is an error message!!' type='error' isVisible={true} />
            </div>
        </div>
    )
}

export default Login
