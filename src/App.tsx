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
import WorkoutVideo from './pages/WorkoutVideo/WorkoutVideo'
import BicepAllVideos from './pages/Home/BicepAllVideos'
import LegsAllVideos from './pages/Home/LegsAllVideos'
import AbsAllVideos from './pages/Home/AbsAllVideos'
import RecentAllVideos from './pages/Home/RecentAllVideos'
import TricepAllVideos from './pages/Home/TricepAllVideos'
import LevelPrograms from './pages/WorkoutProgram/level/LevelPrograms'
import BodyPartsPrograms from './pages/WorkoutProgram/bodyParts/BodyPartsPrograms'
import ArmsBeginner from './pages/EachProgram/Beginner/ArmsBeginner'

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
        <Route path="/workoutvideos" element={<WorkoutVideo />} />

        {/* programs */}
        <Route path="/programs/level" element={<LevelPrograms />} />
        <Route path="/programs/bodyparts" element={<BodyPartsPrograms />} />

        {/* Eachprogram */}
        <Route path="/programs/arms/beginner" element={<ArmsBeginner />} />

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/auth" element={<LoginAndRegister />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/auth" />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bicepAll" element={<BicepAllVideos />} />
          <Route path="/tricepAll" element={<TricepAllVideos />} />
          <Route path="/legsAll" element={<LegsAllVideos />} />
          <Route path="/absAll" element={<AbsAllVideos />} />
          <Route path="/recentAll" element={<RecentAllVideos />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
