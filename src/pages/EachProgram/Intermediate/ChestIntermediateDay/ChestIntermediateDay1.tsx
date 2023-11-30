// import useVideoGet from '../../../../hooks/useVideoGet'
import ProgramsGet from '../../../../components/ProgramsGet'
import useProgramsGet from '../../../../hooks/useProgramsGet'

function ChestIntermediateDay1() {
  const { programsGet } = useProgramsGet()
  return (
    <div>
      <div className={`py-8 flex flex-col gap-8`}>
        {programsGet &&
          programsGet
            .filter((programsData) => {
              return (
                programsData.body_part === 'chest' &&
                programsData.video_type === 'intermediate' &&
                programsData.schedule_title === 'day1'
              )
            })
            .map((programsData) => {
              return <ProgramsGet key={programsData.content_id} programsGet={programsData} />
            })}
      </div>
    </div>
  )
}

export default ChestIntermediateDay1