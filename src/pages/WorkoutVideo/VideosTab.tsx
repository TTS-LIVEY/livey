import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import classes from './WorkoutVideo.module.css'
import Videos from './Videos'

function VideosTab() {
  // const [isActive, setActive] = useState(false)
  // const handleToggle = () => {
  //   setActive(!isActive)
  // }
  const videosProps = {
    id: 0,
    videos: String,
  }
  const vidCard = [videosProps, videosProps, videosProps]
  return (
    // ถ้า focus คลิกที่อื่นจะหาย
    // ถ้า useState จะขึ้นทุกอัน หา state ที่ลบอันอื่น?
    // ${isActive ? 'bg-[#DDFFBC]' : 'bg-[#91c788]'}
    <>
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList className={`${classes.fontPanelHead} grid grid-cols-2 text-center hover:cursor-pointer `}>
          <Tab
            // onClick={handleToggle}
            className={`${classes.bodyPart} hover:bg-[#feffde] border-2 border-b-0 border-black border-opacity-20 rounded-tl-3xl py-3`}
          >
            Body part
          </Tab>
          <Tab
            // onClick={handleToggle}
            className={`${classes.difficulty} hover:bg-[#DDFFBC] border-2 border-b-0 border-black border-opacity-20 rounded-tr-3xl py-3`}
          >
            Difficulty
          </Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className={`${classes.fontPanelSub} grid grid-cols-5 text-center hover:cursor-pointer `}>
              <Tab
                // onClick={handleToggle}
                className={`${classes.bodyPart} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#feffde] focus:bg-[#feffde] py-2`}
              >
                Arms
              </Tab>
              <Tab
                // onClick={handleToggle}
                className={`${classes.bodyPart} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#feffde] focus:bg-[#feffde] py-2`}
              >
                Legs
              </Tab>
              <Tab
                // onClick={handleToggle}
                className={`${classes.bodyPart} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#feffde] focus:bg-[#feffde] py-2`}
              >
                Abs
              </Tab>
              <Tab
                // onClick={handleToggle}
                className={`${classes.bodyPart} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#feffde] focus:bg-[#feffde] py-2`}
              >
                Glute
              </Tab>
              <Tab
                // onClick={handleToggle}
                className={`${classes.bodyPart} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#feffde] focus:bg-[#feffde] py-2`}
              >
                Back
              </Tab>
            </TabList>

            {/* Arms */}
            <TabPanel>
              <div className={`${classes.bodyPartSub}`}>
                <p>Arms</p>
                <div className="flex justify-center px-10 my-8 hover:cursor-pointer gap-20 object-cover">
                  {vidCard.map(() => {
                    return <Videos key={videosProps.id} />
                  })}
                </div>
              </div>
            </TabPanel>
            {/*  */}

            <TabPanel>
              <div className={`${classes.bodyPartSub}`}>
                <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png"
                  alt="Marge Simpson"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${classes.bodyPartSub}`}>
                <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${classes.bodyPartSub}`}>
                <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png"
                  alt="Lisa Simpson"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${classes.bodyPartSub}`}>
                <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png"
                  alt="Maggie Simpson"
                />
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className={`${classes.fontPanelSub} grid grid-cols-3 text-center`}>
              <Tab
                className={`${classes.difficulty} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#ddffbc] focus:bg-[#ddffbc] py-2`}
              >
                Beginner
              </Tab>
              <Tab
                className={`${classes.difficulty} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#ddffbc] focus:bg-[#ddffbc] py-2`}
              >
                Intermediate
              </Tab>
              <Tab
                className={`${classes.difficulty} hover:cursor-pointer border-2 border-black border-opacity-20 border-b-0 hover:bg-[#ddffbc] focus:bg-[#ddffbc] py-2`}
              >
                Advance
              </Tab>
            </TabList>
            <TabPanel>
              <div className={`${classes.difficultySub}`}>
                <p>
                  Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert
                  Farnsworth. Suitor of Leela.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png"
                  alt="Philip J. Fry"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${classes.difficultySub}`}>
                <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png"
                  alt="Turanga Leela"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${classes.difficultySub}`}>
                <p>
                  A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Frys best friend. Built in Tijuana,
                  Mexico, he is the Planet Express Ship cook.
                </p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"
                  alt="Bender Bending Rodriguez"
                />
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default VideosTab
