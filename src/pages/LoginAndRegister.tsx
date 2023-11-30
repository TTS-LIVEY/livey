import { FormEvent, useState } from 'react'
import classes from './LoginAndRegister.module.css'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const LoginAndRegister = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const { register, login } = useAuth()
  const [name, setName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [height, setHeight] = useState<number | null>(null)
  const [weight, setWeight] = useState<number | null>(null)

  const navigate = useNavigate()

  const handleSubmitRegister = async (e: FormEvent) => {
    e.preventDefault() //Dont forget () I will forget mostly

    const notifySuccess = () => {
      toast.success('Register Success', { position: 'top-center', duration: 3000 })
    }

    const notifyError = () => {
      toast.error('Duplicate Username', {
        id: 'errorRegister',
        position: 'top-center',
        duration: 2000,
        style: { background: '#f44336', color: '#ffffff' },
        iconTheme: {
          primary: '#ffffff',
          secondary: '#f44336',
        },
      })
    }

    try {
      await register(name, username, password, height, weight)
      setIsActive(false)
      navigate('/auth')
      setTimeout(() => {
        notifySuccess()
      }, 500)
    } catch (err) {
      notifyError()
      console.log(err)
    }
  }

  const handleSubmitLogin = async (e: FormEvent) => {
    e.preventDefault() //Dont forget () I will forget mostly

    const notifySuccess = () => {
      toast.success('Login Success', { position: 'top-center', duration: 3000 })
    }

    const notifyError = () => {
      toast.error('Wrong username or password', {
        id: 'errorLogin',
        position: 'top-center',
        duration: 2000,
        style: { background: '#f44336', color: '#ffffff' },
        iconTheme: {
          primary: '#ffffff',
          secondary: '#f44336',
        },
      })
    }

    try {
      await login(username, password)
      navigate('/')
      setTimeout(() => {
        notifySuccess()
      }, 500)
    } catch (err) {
      notifyError()
      console.log(err)
    }
  }

  const handleSwitchTrue = () => {
    setIsActive(true)
    console.log(isActive)
  }

  const handleSwitchFalse = () => {
    setIsActive(false)
    console.log(isActive)
  }

  return (
    <>
      <Toaster />
      <div className={classes.body}>
        <div className={isActive ? `${classes.container} ${classes.active}` : `${classes.container}`} id="container">
          <div className={`${classes.formContainer} ${classes.signUp}`}>
            <form onSubmit={handleSubmitRegister}>
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <input type="text" placeholder="Height" onChange={(e) => setHeight(Number(e.target.value))} />
              <input type="text" placeholder="Weight" onChange={(e) => setWeight(Number(e.target.value))} />
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className={`${classes.formContainer} ${classes.signIn}`}>
            <form onSubmit={handleSubmitLogin}>
              <h1>Sign In</h1>
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className={classes.toggleContainer}>
            <div className={classes.toggle}>
              <div className={`${classes.togglePanel} ${classes.toggleLeft}`}>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button className={classes.hidden} id="login" onClick={handleSwitchFalse}>
                  Sign In
                </button>
              </div>
              <div className={`${classes.togglePanel} ${classes.toggleRight}`}>
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button className={classes.hidden} id="register" onClick={handleSwitchTrue}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginAndRegister
