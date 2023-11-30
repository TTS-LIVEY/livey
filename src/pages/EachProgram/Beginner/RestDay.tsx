import HotelIcon from '@mui/icons-material/Hotel'

function RestDay() {
  return (
    <div className={`p-4 flex flex-col gap-3`}>
      <div>
        Livey Rest Day: Recharge and rejuvenate. No workouts today. Just pure relaxation and self-care to power up for
        tomorrow&apos;s adventure!
      </div>
      <HotelIcon className="mx-auto" sx={{ fontSize: 60 }} color="disabled" />
    </div>
  )
}

export default RestDay
