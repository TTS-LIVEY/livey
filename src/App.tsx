import './App.css'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Journal from './pages/Journal'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'
import LoginAndRegister from './pages/LoginAndRegister'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/auth" element={<LoginAndRegister />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/auth" />}>
          <Route path="/journal" element={<Journal />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
