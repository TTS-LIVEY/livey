// import useVideoGet from '../../../../hooks/useVideoGet'
import ProgramsGet from '../../../../components/ProgramsGet'
import useProgramsGet from '../../../../hooks/useProgramsGet'

function ArmsBeginnerDay1() {
  const { programsGet } = useProgramsGet()
  return (
    <div>
      <div className="py-5 flex flex-col gap-5 ">
        {/* <div className={classes.videoContainer}>
          {videoGet &&
            videoGet
              .filter((videoData) => {
                return (
                  videoData.body_part === 'arms' &&
                  videoData.video_type === 'beginner' &&
                  videoData.schedule_title === 'Day 1'
                )
              })
              .slice(-3)
              .map((videoData) => {
                return <VideoGet key={videoData.content_id} videoGet={videoData} />
              })}
        </div> */}

        <div className={``}>
          {programsGet &&
            programsGet
              .filter((programsData) => {
                return (
                  programsData.body_part === 'bicep' ||
                  (programsData.body_part === 'tricep' &&
                    programsData.video_type === 'beginner' &&
                    programsData.schedule_title === 'day1')
                )
              })
              .map((programsData) => {
                return <ProgramsGet key={programsData.content_id} programsGet={programsData} />
              })}
        </div>
      </div>
    </div>
  )
}

export default ArmsBeginnerDay1
