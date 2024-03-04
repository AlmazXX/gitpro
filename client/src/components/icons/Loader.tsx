import styles from './Icons.module.css';

export const Loader = () => {
  return (
    <div className={styles.loading_icon}>
      <div className={styles.icon}></div>
    </div>
  );
};
