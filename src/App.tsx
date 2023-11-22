import './App.css'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import WorkoutVideo from './pages/WorkoutVideo/WorkoutVideo'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/videos" element={<WorkoutVideo />} />
      </Routes>
    </div>
  )
}

export default App
