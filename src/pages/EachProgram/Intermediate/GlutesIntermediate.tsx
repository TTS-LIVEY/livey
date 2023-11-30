import classes from '../../Program2.module.css'
import pic from '../../../../public/Programs_thumbnail/glutes/glutes_beginner.png'
import Navbar from '../../../components/Navbar/Navbar'
import { Footer } from 'antd/es/layout/layout'
import Day from '@mui/icons-material/DateRange'
import Time from '@mui/icons-material/AccessTime'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import GlutesBeginnerDay1 from './GlutesIntermediateDay/GlutesIntermediateDay1'
import GlutesBeginnerDay2 from './GlutesIntermediateDay/GlutesIntermediateDay2'
import GlutesBeginnerDay3 from './GlutesIntermediateDay/GlutesIntermediateDay3'
import GlutesBeginnerDay5 from './GlutesIntermediateDay/GlutesIntermediateDay5'
import GlutesBeginnerDay6 from './GlutesIntermediateDay/GlutesIntermediateDay6'
import RestDay from './RestDay'

function GlutesBeginner() {
  return (
    <>
      <Navbar />
      <div className={`${classes.container} flex`}>
        <div>
          {/* <p className={`${classes.Title}`}>Latest Challenges</p> */}
          {/*  */}
          <div className={` bg-white w-11/12 h-auto mx-auto rounded-3xl shadow-md mt-2`} id="LeftCard">
            <img src={pic} className={`mx-auto rounded-t-3xl`} />
            <div className="px-4 pb-4">
              <div className={`${classes.Tags} flex gap-3 mb-3 mt-5`}>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Glutes</div>
              </div>

              <div className="gap-2 mt-4 flex flex-col">
                <div className={`${classes.CardTitle} flex my-auto gap-5`}>
                  <Day />
                  <p>5 days/week</p>
                </div>
                <div className={`${classes.CardTitle} flex my-auto gap-5`}>
                  <Time />
                  <p>20 min/day</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        <div className={`  w-full`}>
          <p className={`${classes.Title} ml-10`}>Glutes workout for beginner</p>
          <div className="mt-3 ml-5">
            <Tabs>
              <TabList className={` ${classes.BodyPartsTitle} flex justify-between`}>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Day 1</Tab>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Day 2</Tab>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Day 3</Tab>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Rest day</Tab>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Day 5</Tab>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Day 6</Tab>
                <Tab className={`w-1/3 text-center rounded-t-3xl hover:cursor-pointer p-2`}>Rest day</Tab>
              </TabList>

              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-tr-3xl rounded-b-3xl shadow-xl`}>
                <GlutesBeginnerDay1 />
              </TabPanel>
              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
                <GlutesBeginnerDay2 />
              </TabPanel>
              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
                <GlutesBeginnerDay3 />
              </TabPanel>
              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
                <RestDay />
              </TabPanel>
              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
                <GlutesBeginnerDay5 />
              </TabPanel>
              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-t-3xl rounded-b-3xl shadow-xl`}>
                <GlutesBeginnerDay6 />
              </TabPanel>
              {/*  */}
              <TabPanel className={`${classes.TabPanel} rounded-tl-3xl rounded-b-3xl shadow-xl`}>
                <RestDay />
              </TabPanel>
              {/*  */}
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default GlutesBeginner
