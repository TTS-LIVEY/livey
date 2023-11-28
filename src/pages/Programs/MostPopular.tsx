import classes from '../Program2.module.css'
import Go from '@mui/icons-material/ArrowForwardIos'
import pic from '../../assets/programs pic/abs.webp'
import { grey } from '@mui/material/colors'

function MostPopular() {
  return (
    <>
      {/*  */}
      <div className="mt-5 flex flex-col gap-5 ">
        <div className={`${classes.card} bg-white h-36 w-4/5 mx-auto rounded-3xl shadow-md flex  p-3`}>
          <div>
            <img src={pic} className={`mx-auto rounded-xl h-full`} />
          </div>
          <div className="flex justify-between w-5/6">
            <div className="pt-1 ml-6 my-auto flex flex-col gap-5">
              <div className={`flex gap-3 h-1/6 items-center ${classes.Tags} `}>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Bicep</div>
              </div>
              <div className={`${classes.CardTitle} col-span-2`}>Arms workout for beginner</div>
            </div>

            <Go sx={{ fontSize: 70, color: grey[200] }} className="my-auto" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className={`${classes.card} bg-white h-36 w-4/5 mx-auto rounded-3xl shadow-md flex  p-3`}>
          <div>
            <img src={pic} className={`mx-auto rounded-xl h-full`} />
          </div>
          <div className="flex justify-between w-5/6">
            <div className="pt-1 ml-6 my-auto flex flex-col gap-5">
              <div className={`flex gap-3 h-1/6 items-center ${classes.Tags} `}>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Bicep</div>
              </div>
              <div className={`${classes.CardTitle} col-span-2`}>Arms workout for beginner</div>
            </div>

            <Go sx={{ fontSize: 70, color: grey[200] }} className="my-auto" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className={`${classes.card} bg-white h-36 w-4/5 mx-auto rounded-3xl shadow-md flex  p-3`}>
          <div>
            <img src={pic} className={`mx-auto rounded-xl h-full`} />
          </div>
          <div className="flex justify-between w-5/6">
            <div className="pt-1 ml-6 my-auto flex flex-col gap-5">
              <div className={`flex gap-3 h-1/6 items-center ${classes.Tags} `}>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Beginner</div>
                <div className="rounded-3xl border-black border px-2 bg-[#f3f3f3]">Bicep</div>
              </div>
              <div className={`${classes.CardTitle} col-span-2`}>Arms workout for beginner</div>
            </div>

            <Go sx={{ fontSize: 70, color: grey[200] }} className="my-auto " />
          </div>
        </div>
        {/*  */}
      </div>
    </>
  )
}

export default MostPopular
