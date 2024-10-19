import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './features/auth/Login'
import Callback from './components/Callback'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/callback' element={<Callback />} />
            </Routes>
        </Router>
    )
}

export default App
