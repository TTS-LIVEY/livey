import './App.css'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Journal from './pages/Journal'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'
import LoginAndRegister from './pages/LoginAndRegister'
// import Programs from './pages/Home/RecentVideo'
import VideoById from './pages/VideoById'
import Admin from './pages/Admin/Admin'
import MyHistory from './components/MyHistory'
import Programs2 from './pages/Programs2'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id" element={<VideoById />} />
        <Route path="/history/:id" element={<MyHistory />} />

        {/* <Route path="/programs" element={<Programs />} /> */}
        <Route path="/programs" element={<Programs2 />} />

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/auth" element={<LoginAndRegister />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/auth" />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
