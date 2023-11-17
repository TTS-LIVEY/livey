import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className={classes.nav}>
      <Link className={classes.logo} to={'/'}>
        <p className={classes.logoName}>LIVEY</p>
      </Link>

      <div className={classes.navRight}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/profile">
              Journal
            </NavLink>

            <p className={classes.inActive} onClick={logout}>
              Logout
            </p>
          </>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inActive)} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default Navbar
