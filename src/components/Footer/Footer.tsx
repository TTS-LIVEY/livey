import classes from './Footer.module.css'
import logo from '../../../public/Home/logo-footer.png'

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
            <p className={`font-mon font-medium`}>About us</p>
            <p className={`font-mon font-medium`}>Livey</p>
          </div>
          {/* text 1 */}

          {/* text 2 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`font-mon font-medium`}>Contact</p>
            <p className={`font-mon font-medium`}>081-123-4567</p>
            <p className={`font-mon font-medium`}>livey@hotmail.com</p>
          </div>
          {/* text 2 */}

          {/* text 2 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`font-mon font-medium`}>Support</p>
            <p className={`font-mon font-medium`}>Kasikorn</p>
            <p className={`font-mon font-medium`}>062-1-07731-7</p>
          </div>
          {/* text 2 */}

          {/* text 3 */}
          <div className="flex flex-col w-1/6 gap-3 ">
            <p className={`font-mon font-medium`}>Follow us</p>
            <p className={`font-mon font-medium`}>facebook.com/fitjunctions</p>
            <p className={`font-mon font-medium`}>youtube.com/@fitjunctions</p>
          </div>
          {/* text 3 */}
        </div>
      </div>
    </div>
  )
}

export default Footer
