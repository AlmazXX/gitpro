import LoginImage from '../../assets/images/Login_image.png';
import GitHubButton from '../../components/UI/actions/GitHubBtn/GitHubBtn';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <div className={styles.login}>
      <div>
        <img src={LoginImage} className={styles.login_image} />
      </div>
      <div className={styles.login_body}>
        <h6 className={styles.login_title}>Please login via GitHub</h6>
        <p className={styles.login_description}>
          In order to access the GitPro, you need to login with your GitHub account
        </p>
      </div>
      <ul className={styles.login_actions}>
        <li style={{ width: '100%' }}>
          <GitHubButton />
        </li>
      </ul>
    </div>
  );
};
