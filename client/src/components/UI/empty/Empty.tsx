import image from '../../../assets/images/home-desktop-dark.webp';
import styles from './Empty.module.css';

const Empty = () => {
  return (
    <div className={styles.empty}>
      <img src={image} />
    </div>
  );
};

export default Empty;
