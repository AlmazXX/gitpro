import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_side}>side</div>
      <div className={styles.home_main}>main</div>
    </div>
  );
};
