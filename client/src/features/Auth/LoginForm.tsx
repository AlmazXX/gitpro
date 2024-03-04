import { LoginBtn } from '..';
import LoginImage from '../../assets/images/Login_image.png';
import styles from './Auth.module.css';

export const LoginForm = () => {
  return (
    <div className={styles.auth}>
      <div>
        <img src={LoginImage} className={styles.auth_image} />
      </div>
      <div className={styles.auth_body}>
        <h6 className={styles.auth_title}>Please login via GitHub</h6>
        <p className={styles.auth_description}>
          In order to access the GitPro, you need to login with your GitHub account
        </p>
      </div>
      <ul className={styles.auth_actions}>
        <li style={{ width: '100%' }}>
          <LoginBtn />
        </li>
      </ul>
    </div>
  );
};
