import { Link } from 'react-router-dom';
import { LogoutBtn } from '../../../features';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <Link to="/app">Home</Link>
      <Link to="/app/search">Search users</Link>
      <LogoutBtn />
    </nav>
  );
};

export default Header;
