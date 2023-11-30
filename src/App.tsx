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
import BicepAllVideos from './pages/Home/BicepAllVideos'
import LegsAllVideos from './pages/Home/LegsAllVideos'
import AbsAllVideos from './pages/Home/AbsAllVideos'
import RecentAllVideos from './pages/Home/RecentAllVideos'
import TricepAllVideos from './pages/Home/TricepAllVideos'
import LevelPrograms from './pages/WorkoutProgram/level/LevelPrograms'
import BodyPartsPrograms from './pages/WorkoutProgram/bodyParts/BodyPartsPrograms'
import ArmsBeginner from './pages/EachProgram/Beginner/ArmsBeginner'
import ChestBeginner from './pages/EachProgram/Beginner/ChestBeginner'
import ShoulderBeginner from './pages/EachProgram/Beginner/ShoulderBeginner'
import BackBeginner from './pages/EachProgram/Beginner/BackBeginner'
import LegsBeginner from './pages/EachProgram/Beginner/LegsBeginner'
import GlutesBeginner from './pages/EachProgram/Beginner/GlutesBeginner'
import AbsBeginner from './pages/EachProgram/Beginner/AbsBeginner'
import CardioBeginner from './pages/EachProgram/Beginner/CardioBeginner'
import ArmsIntermediate from './pages/EachProgram/Intermediate/ArmsIntermediate'
import ChestIntermediate from './pages/EachProgram/Intermediate/ChestIntermediate'
import ChestAllVideos from './pages/Home/ChestAllVideos'
import ShoulderAllVideos from './pages/Home/ShoulderAllVideos'
import BackAllVideos from './pages/Home/BackAllVideos'
import GlutesAllVideos from './pages/Home/GlutesAllVideos'
import CardioAllVideos from './pages/Home/CardioAllVideos'

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

        {/* programs */}
        <Route path="/programs/level" element={<LevelPrograms />} />
        <Route path="/programs/bodyparts" element={<BodyPartsPrograms />} />

        {/* beginner */}
        <Route path="/programs/arms/beginner" element={<ArmsBeginner />} />
        <Route path="/programs/chest/beginner" element={<ChestBeginner />} />
        <Route path="/programs/shoulder/beginner" element={<ShoulderBeginner />} />
        <Route path="/programs/back/beginner" element={<BackBeginner />} />
        <Route path="/programs/legs/beginner" element={<LegsBeginner />} />
        <Route path="/programs/glutes/beginner" element={<GlutesBeginner />} />
        <Route path="/programs/abs/beginner" element={<AbsBeginner />} />
        <Route path="/programs/cardio/beginner" element={<CardioBeginner />} />
        {/* intermediate */}
        <Route path="/programs/arms/intermediate" element={<ArmsIntermediate />} />
        <Route path="/programs/chest/intermediate" element={<ChestIntermediate />} />
        {/* <Route path="/programs/shoulder/intermediate" element={<ShoulderIntermediate />} /> */}
        {/* <Route path="/programs/back/intermediate" element={<BackIntermediate />} /> */}
        {/* <Route path="/programs/legs/intermediate" element={<LegsIntermediate />} /> */}
        {/* <Route path="/programs/glutes/intermediate" element={<GlutesIntermediate />} /> */}
        {/* <Route path="/programs/abs/intermediate" element={<AbsIntermediate />} /> */}
        {/* <Route path="/programs/cardio/intermediate" element={<CardioIntermediate />} /> */}

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/auth" element={<LoginAndRegister />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/auth" />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/bicepAll" element={<BicepAllVideos />} />
          <Route path="/tricepAll" element={<TricepAllVideos />} />
          <Route path="/chestAll" element={<ChestAllVideos />} />
          <Route path="/shoulderAll" element={<ShoulderAllVideos />} />
          <Route path="/backAll" element={<BackAllVideos />} />
          <Route path="/glutesAll" element={<GlutesAllVideos />} />
          <Route path="/legsAll" element={<LegsAllVideos />} />
          <Route path="/absAll" element={<AbsAllVideos />} />
          <Route path="/cardioAll" element={<CardioAllVideos />} />
          <Route path="/recentAll" element={<RecentAllVideos />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
