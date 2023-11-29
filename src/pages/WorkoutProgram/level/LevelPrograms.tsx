import classes from '../AllPrograms.module.css'
// import BeginnerVideos from '../../Programs/BeginnerVideos'
import Navbar from '../../../components/Navbar/Navbar'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import BeginnerLevel from './levelPrograms/BeginnerLevel'
import IntermediateLevel from './levelPrograms/IntermediateLevel'
import AdvanceLevel from './levelPrograms/AdvanceLevel'

function LevelPrograms() {
  return (
    <>
      <Navbar />
      <div className={` ${classes.container}`}>
        <Tabs focusTabOnClick={false}>
          <TabList className={` ${classes.Title} flex justify-between`}>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Beginner</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Intermediate</Tab>
            <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Advance</Tab>
          </TabList>

          <TabPanel className={`${classes.TabPanel} rounded-tr-3xl rounded-b-3xl shadow-xl`}>
            <BeginnerLevel />
          </TabPanel>
          <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
            <IntermediateLevel />
          </TabPanel>
          <TabPanel className={`${classes.TabPanel} rounded-tl-3xl rounded-b-3xl shadow-xl`}>
            <AdvanceLevel />
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default LevelPrograms

{
  /* <p className={`${classes.Title} `}>Beginner programs</p>
<div className={`${classes.Description} grid grid-cols-5 mt-5 mb-3`}>
  <p className={`col-span-4`}>
    Start your fitness journey with our foundations program. Learn essential techniques and join a supportive
    community for a healthier lifestyle.
  </p>
</div>


<div className="grid grid-cols-4">
  {card &&
    card.map(() => {
      return <BeginnerVideos key={id} />
    })}
</div>  */
}
