import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? styles.red : styles.blue;
        }}>
        Home
      </NavLink>
      <NavLink
        to="/db"
        className={({ isActive }) => {
          return isActive ? styles.red : styles.blue;
        }}>
        Dragon Ball
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? styles.red : styles.blue;
        }}>
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => {
          return isActive ? styles.red : styles.blue;
        }}>
        Contact
      </NavLink>
    </nav>
  );
};

export default NavBar;
