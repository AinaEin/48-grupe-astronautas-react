import style from './Logo.modules.css';
import logo from '../../assets/img/logo.jpg';

function Logo() {
    return <img className={style.logo} src={logo} alt="Logo" />;
}

export { Logo };