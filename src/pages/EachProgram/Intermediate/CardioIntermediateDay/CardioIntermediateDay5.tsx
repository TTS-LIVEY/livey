// import useVideoGet from '../../../../hooks/useVideoGet'
import ProgramsGet from '../../../../components/ProgramsGet'
import useProgramsGet from '../../../../hooks/useProgramsGet'

function CardioBeginnerDay5() {
  const { programsGet } = useProgramsGet()
  return (
    <div>
      <div className={`py-8 flex flex-col gap-8`}>
        {programsGet &&
          programsGet
            .filter((programsData) => {
              return (
                programsData.body_part === 'cardio' &&
                programsData.video_type === 'beginner' &&
                programsData.schedule_title === 'day5'
              )
            })
            .map((programsData) => {
              return <ProgramsGet key={programsData.content_id} programsGet={programsData} />
            })}
      </div>
    </div>
  )
}

export default CardioBeginnerDay5
