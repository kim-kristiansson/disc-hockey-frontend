import Button from './components/Button/Button'
import DummyIcon from './dev-utils/icons/DummyIcon'

const App = () => (
    <Button
        ariaLabel='Dummy Button'
        onClick={() => {
            console.log('Click!')
        }}
        text='Click Here'
        icon={DummyIcon}
    />
)

export default App
