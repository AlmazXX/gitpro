import LoginImage from '../../assets/images/Login_image.png';
import GitHubButton from '../../components/UI/actions/GitHubBtn/GitHubBtn';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <div className={styles.card}>
      <div>
        <img src={LoginImage} className={styles.card_image} />
      </div>
      <div className={styles.card_body}>
        <h6 className={styles.card_title}>Please login via GitHub</h6>
        <p className={styles.card_description}>
          In order to access the GitPro, you need to login with your GitHub account
        </p>
      </div>
      <ul className={styles.card_actions}>
        <li style={{ width: '100%' }}>
          <GitHubButton />
        </li>
      </ul>
    </div>
  );
};
