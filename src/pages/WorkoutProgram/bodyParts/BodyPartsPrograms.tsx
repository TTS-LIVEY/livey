import classes from '../AllPrograms.module.css'
// import BeginnerVideos from '../../Programs/BeginnerVideos'
import Navbar from '../../../components/Navbar/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import BicepAndTricep from './bodyPartsPrograms/BicepAndTricep'
import Chest from './bodyPartsPrograms/Chest'
import Shoulder from './bodyPartsPrograms/Shoulder'
import Back from './bodyPartsPrograms/Back'
import Legs from './bodyPartsPrograms/Legs'
import Glutes from './bodyPartsPrograms/Glutes'
import Abs from './bodyPartsPrograms/Abs'
import Cardio from './bodyPartsPrograms/Cardio'

function BodyPartsPrograms() {
  return (
    <>
      <Navbar />
      <div className={` ${classes.container}`}>
        <Tabs focusTabOnClick={false}>
          <TabList className={` ${classes.BodyPartsTitle} flex justify-between`}>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Bicep & Tricep</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Chest</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Shoulder</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Back</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Legs</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Glutes</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Abs</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Cardio</Tab>
          </TabList>

          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-tr-3xl rounded-b-3xl shadow-xl`}>
            <BicepAndTricep />
          </TabPanel>
          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
            <Chest />
          </TabPanel>
          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-tl-3xl rounded-b-3xl shadow-xl`}>
            <Shoulder />
          </TabPanel>
          {/*  */}

          <TabPanel className={`${classes.TabPanel} rounded-tr-3xl rounded-b-3xl shadow-xl`}>
            <Back />
          </TabPanel>
          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
            <Legs />
          </TabPanel>
          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-tl-3xl rounded-b-3xl shadow-xl`}>
            <Glutes />
          </TabPanel>
          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
            <Abs />
          </TabPanel>
          {/*  */}
          <TabPanel className={`${classes.TabPanel} rounded-tl-3xl rounded-b-3xl shadow-xl`}>
            <Cardio />
          </TabPanel>
          {/*  */}
        </Tabs>
      </div>
    </>
  )
}

export default BodyPartsPrograms
