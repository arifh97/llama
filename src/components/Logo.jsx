import logo from '../assets/img/logo.png'
import favicon from '../assets/img/favicon.png'
import {Link} from 'react-scroll'

export default function Logo() {
  return (
    <Link className="logo" to="banner" spy={true} smooth={true} duration={600} offset={0}>
        <img src={logo} className='d-none d-xl-block' alt="site-logo" />
        <img src={favicon} className='d-xl-none' alt="site-logo" />
    </Link>
  )
}
