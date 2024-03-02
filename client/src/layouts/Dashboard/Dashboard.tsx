import { Outlet } from 'react-router-dom';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
