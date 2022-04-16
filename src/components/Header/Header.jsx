import s from './Header.module.scss'
import logo from '../../img/logo.jpeg'
import close from '../../img/close.png'

const Header = props => {
  return (
      <header className={s.header}>
        <img src={logo} alt="logo" />
        <img src={close} alt="close" />
      </header>
  );
}

export default Header
