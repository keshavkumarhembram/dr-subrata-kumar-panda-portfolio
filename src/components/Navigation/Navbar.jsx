import { NavLink } from 'react-router-dom';

import logo from './../../assets/img/content/college-logo.jpeg';
import styles from './Navbar.module.css';

const  Navbar = () => {
  return (
    <header>
    <nav className={styles['nav-bar']}>
        <div>
            <img className={styles.logo} src={logo} alt='N I T Rourkela logo' />
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? styles['active-link'] : styles.link } to="/">HOME</NavLink>
            </li>
            <li>
                <a  className={styles.link } href="#education">EDUCATION</a>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? styles['active-link'] : styles.link } to="/work">WORK</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? styles['active-link'] : styles.link }to="/projects">PROJECTS</NavLink>
            </li>
            {/* <li>
                <NavLink className={({isActive}) => isActive ? styles['active-link'] : styles.link } to="/contact">CONTACT</NavLink>
            </li> */}
        </ul>
            </div>
    
        
    </nav>
    </header>
  )
}

export default Navbar;