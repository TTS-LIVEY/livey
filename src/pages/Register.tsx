import styles from './Register.module.css'
import classes from './Register.module.css'
import rectangle1 from '../assets/Login/rectangle17523-gwdb-1100w.png'
import rectangle2 from '../assets/Login/rectangle27523-ev8s-1000w.png'
import rectangle21 from '../assets/Login/rectangle27523-tdw9-700w.png'
import rectangle4 from '../assets/Login/rectangle47524-s0h3-200h.png'
import ellipse1 from '../assets/Login/ellipse17526-p5jl-200h.png'
import ellipse2 from '../assets/Login/ellipse27526-phr-200h.png'
import ellipse4 from '../assets/Login/ellipse47526-0w1y-200h.png'
import ellipse10 from '../assets/Login/ellipse107526-yckq-200h.png'
import ellipse5 from '../assets/Login/ellipse57526-3yh-200h.png'
import ellipse6 from '../assets/Login/ellipse67526-6oph-200h.png'
import ellipse3 from '../assets/Login/ellipse37526-2xlp-200h.png'
import ellipse7 from '../assets/Login/ellipse77526-d5-200h.png'
import ellipse99 from '../assets/Login/ellipse117527-hgz-200h.png'
import ellipse12 from '../assets/Login/ellipse127527-uosm-200h.png'
import ellipse9 from '../assets/Login/ellipse97527-t2jc-200h.png'
import ellipse8 from '../assets/Login/ellipse87527-fve8-200w.png'
import ellipse71 from '../assets/Login/ellipse77527-y0fp-200h.png'
import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {
  const { register } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() //Dont forget () I will forget mostly

    const notifySuccess = () => {
      toast.success('Register Success', { position: 'top-center', duration: 3000 })
    }

    const notifyError = () => {
      toast.error('Cannot Create User', {
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
      await register(username, password)
      navigate('/login')
      setTimeout(() => {
        notifySuccess()
      }, 500)
    } catch (err) {
      notifyError()
      console.log(err)
    }
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div>
      <div>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <p className={classes.loginTitle}>Register Now</p>

          <input
            className={classes.input}
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className={classes.input}
            placeholder="Password"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={classes.button} type="submit">
            SIGN UP
          </button>

          <p className={classes.loginFooter}>
            Have a member? <a onClick={handleLogin}>Login now</a>
          </p>
        </form>
      </div>

      <div className={styles['background']}>
        <img src={rectangle1} className={styles['rectangle1']} />
        <img src={rectangle2} className={styles['rectangle2']} />
        <img src={rectangle21} className={styles['rectangle21']} />
        <img src={rectangle4} className={styles['rectangle4']} />
        <img src={ellipse1} className={styles['ellipse1']} />
        <img src={ellipse2} className={styles['ellipse2']} />
        <img src={ellipse4} className={styles['ellipse4']} />
        <img src={ellipse10} className={styles['ellipse10']} />
        <img src={ellipse5} className={styles['ellipse5']} />
        <img src={ellipse6} className={styles['ellipse6']} />
        <img src={ellipse3} className={styles['ellipse3']} />
        <img src={ellipse7} className={styles['ellipse7']} />
        <img src={ellipse99} />
        <img src={ellipse12} className={styles['ellipse12']} />
        <img src={ellipse9} className={styles['ellipse9']} />
        <img src={ellipse8} className={styles['ellipse8']} />
        <img src={ellipse71} className={styles['ellipse71']} />
      </div>
    </div>
  )
}

export default Register
