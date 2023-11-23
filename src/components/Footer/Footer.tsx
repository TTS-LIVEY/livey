import classes from './Footer.module.css'
import logo from '../../assets/Home/logo-footer.png'

function Footer() {
  return (
    <div>
      {/* logo */}
      <div className={`${classes.footer} w-full flex`}>
        <div className=" h-full w-1/3 flex flex-col  items-center justify-center ">
          <img src={logo} className="h-2/4 " />
        </div>
        {/* logo */}

        {/* text */}
        <div className="flex justify-end w-full gap-20 pr-40 py-10">
          {/* text 1 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`${classes.fontH}`}>About us</p>
            <p className={`${classes.fontP}`}>Livey</p>
          </div>
          {/* text 1 */}

          {/* text 2 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`${classes.fontH}`}>Contact</p>
            <p className={`${classes.fontP}`}>081-123-4567</p>
            <p className={`${classes.fontP}`}>livey@hotmail.com</p>
          </div>
          {/* text 2 */}

          {/* text 2 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`${classes.fontH}`}>Support</p>
            <p className={`${classes.fontP}`}>Kasikorn</p>
            <p className={`${classes.fontP}`}>062-1-07731-7</p>
          </div>
          {/* text 2 */}

          {/* text 3 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`${classes.fontH}`}>Follow us</p>
            <p className={`${classes.fontP}`}>facebook.com/fitjunctions</p>
            <p className={`${classes.fontP}`}>youtube.com/@fitjunctions</p>
          </div>
          {/* text 3 */}
        </div>
      </div>
    </div>
  )
}

export default Footer
