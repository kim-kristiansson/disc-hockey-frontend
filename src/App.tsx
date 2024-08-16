import Button from './Button/Button'
import DummyIcon from './dev-utils/icons/DummyIcon'

const App = () => (
    <Button
        ariaLabel='Dummy Button'
        onClick={() => {
            console.log('Pop!')
        }}
        text='Click Here To Pop A Cherry'
        icon={DummyIcon}
    />
)

export default App
