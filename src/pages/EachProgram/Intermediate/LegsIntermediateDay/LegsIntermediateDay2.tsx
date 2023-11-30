// import useVideoGet from '../../../../hooks/useVideoGet'
import ProgramsGet from '../../../../components/ProgramsGet'
import useProgramsGet from '../../../../hooks/useProgramsGet'

function LegsBeginnerDay2() {
  const { programsGet } = useProgramsGet()
  return (
    <div>
      <div className={`py-8 flex flex-col gap-8`}>
        {programsGet &&
          programsGet
            .filter((programsData) => {
              return (
                programsData.body_part === 'legs' &&
                programsData.video_type === 'beginner' &&
                programsData.schedule_title === 'day2'
              )
            })
            .map((programsData) => {
              return <ProgramsGet key={programsData.content_id} programsGet={programsData} />
            })}
      </div>
    </div>
  )
}

export default LegsBeginnerDay2
