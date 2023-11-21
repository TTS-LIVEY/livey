// import { Link } from 'react-router-dom'
// import classes from './Navbar.module.css'
// import { useAuth } from '../providers/AuthProvider'
// import { NavLink } from 'react-router-dom'
import logo from './logo-crop.png'
import classes from './Navbar.module.css'
import { Link } from '@mui/material'

const Navbar = () => {
  // const { isLoggedIn, logout } = useAuth()
  return (
    <>
      <div className={`flex h-20 max-w-full justify-between  px-4 pr-5 bg-slate-50 shadow-md`}>
        <Link href="/" underline="none" color="inherit">
          <img src={logo} alt="livey" className="h-full flex" />
        </Link>

        {/*---------- middle ----------*/}

        <div className="flex items-center justify-between gap-10 align-middle ">
          {/* b1 */}
          <button
            className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-slate-50
          hover:bg-slate-50 group  rounded-2xl px-4 h-5/6"
          >
            <span className="w-0 h-0 rounded bg-green-100 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span
              className={`w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10 ${classes.font}`}
            >
              Programs
            </span>
          </button>

          {/* b2 */}
          <button
            className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-slate-50
          hover:bg-slate-50 group my-2.5 rounded-2xl px-4 h-5/6"
          >
            <span className="w-0 h-0 rounded bg-green-100 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span
              className={`w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10 ${classes.font}`}
            >
              <Link href="/videos" underline="none" color="inherit">
                Workout videos
              </Link>
            </span>
          </button>

          {/* b3 */}
          <button
            className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-slate-50
          hover:bg-slate-50 group my-2.5 rounded-2xl px-4 h-5/6"
          >
            <span className="w-0 h-0 rounded bg-green-100 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span
              className={`w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10 ${classes.font}`}
            >
              Exercises
            </span>
          </button>
        </div>

        {/*---------- regis / login ----------*/}
        <div className="flex items-center  align-middle justify-between gap-3">
          {/* regis */}
          <button
            className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-slate-50
          hover:bg-slate-50 group my-2.5 rounded-2xl py-2 px-4"
          >
            <span className="w-0 h-0 bg-green-300 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 rounded-full"></span>
            <span
              className={`w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10 ${classes.font2}`}
            >
              Register
            </span>
          </button>

          {/* login */}
          <div
            className={`bg-gray-300 w-auto rounded-full py-2 px-4 items-center  align-middle hover:cursor-pointer 
            hover:bg-green-300 ${classes.font2}`}
          >
            Login
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
