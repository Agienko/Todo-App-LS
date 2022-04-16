import s from './Header.module.scss'
import logo from '../../img/logo.jpeg'
import close from '../../img/close.png'
import { Link, useLocation } from 'react-router-dom'

const Header = props => {
 
  const {pathname} = useLocation()
  return (
      <header className={s.header}>
        <img src={logo} alt="logo" />
        <Link to={'/tasksLists'}>
        <img src={close} alt="close" hidden={pathname === '/tasksLists'}/>
        </Link>
        
      </header>
  );
}

export default Header
