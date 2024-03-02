import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { getUserData } from '../../store/userSlice';
import styles from './Home.module.css';
import { Profile } from '../../features';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <div className={styles.home_side}>
        <Profile />
      </div>
      <div className={styles.home_main}>main</div>
    </div>
  );
};
