// import useVideoGet from '../../../../hooks/useVideoGet'
import ProgramsGet from '../../../../components/ProgramsGet'
import useProgramsGet from '../../../../hooks/useProgramsGet'

function ArmsIntermediateDay3() {
  const { programsGet } = useProgramsGet()
  return (
    <div>
      <div className={`py-8 flex flex-col gap-8`}>
        {programsGet &&
          programsGet
            .filter((programsData) => {
              return (
                (programsData.body_part === 'bicep' || programsData.body_part === 'tricep') &&
                programsData.video_type === 'intermediate' &&
                programsData.schedule_title === 'day3'
              )
            })
            .map((programsData) => {
              return <ProgramsGet key={programsData.content_id} programsGet={programsData} />
            })}
      </div>
    </div>
  )
}

export default ArmsIntermediateDay3
