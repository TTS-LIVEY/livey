import { NavLink } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import classes from './Navbar.module.css'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  const isAdmin = localStorage.getItem('username') === 'admin'
  return (
    <>
      <div className=" flex max-w-full justify-between  px-4 pr-5 ">
        <NavLink to="/">
          <p
            className={
              'font-mon font-bold text-4xl p-2.5  text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700'
            }
          >
            LIVEY
          </p>
        </NavLink>

        {/*---------- middle ----------*/}

        <div className="flex items-center justify-between gap-10 align-middle ">
          <NavLink to="/programs" className={({ isActive }) => (isActive ? classes.active : classes.inActive)}>
            <div className={`font-mon font-medium ${classes.navMenu}`}>
              Programs<div className={classes.rectangle}></div>
            </div>
          </NavLink>

          <NavLink to="/workoutvideos" className={({ isActive }) => (isActive ? classes.active : classes.inActive)}>
            <span className={`font-mon font-medium ${classes.navMenu}`}>
              Workout videos<div className={classes.rectangle}></div>
            </span>
          </NavLink>

          <NavLink to="/journal" className={({ isActive }) => (isActive ? classes.active : classes.inActive)}>
            <span className={`font-mon font-medium ${classes.navMenu}`}>
              Journal<div className={classes.rectangle}></div>
            </span>
          </NavLink>
        </div>

        {/*---------- regis / login ----------*/}
        <div className="flex items-center align-middle justify-between gap-5">
          {isLoggedIn ? (
            <>
              {isAdmin ? (
                <NavLink to="/admin">
                  {/* <span className={`font-mon font-medium`}>Register</span> */}
                  <span
                    className={`font-mon font-medium text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700 ${classes.navMenu}`}
                  >
                    Admin<div className={classes.rectangle}></div>
                  </span>
                </NavLink>
              ) : null}

              <p
                className={
                  'font-mon font-medium cursor-pointer text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700'
                }
                onClick={logout}
              >
                Logout
              </p>
            </>
          ) : (
            <>
              <NavLink to="/auth">
                <span
                  className={
                    'font-mon font-medium text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700'
                  }
                >
                  Register
                </span>
              </NavLink>

              {/* login */}
              <NavLink to="/auth">
                <div
                  className={
                    'font-mon font-medium text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700'
                  }
                >
                  Login
                </div>
              </NavLink>
            </>
          )}
          {/* regis */}
        </div>
      </div>
    </>
  )
}

export default Navbar
