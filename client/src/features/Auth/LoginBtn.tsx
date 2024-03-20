import { GitHub } from '../../components/icons';
import { GITHUB_OAUTH_LINK } from '../../constants';
import styles from './Auth.module.css';

// function loginWithGithub() {
//   console.log(GITHUB_OAUTH_LINK);
//   window.location.href = GITHUB_OAUTH_LINK;
// }

export const LoginBtn = () => {
  return (
    <span className={styles.auth__gh_wrap}>
      <a className={styles.auth__gh_btn} href={GITHUB_OAUTH_LINK}>
        <span className={styles.auth__gh_icon}>
          <GitHub />
        </span>
        <span>Sign up with GitHub</span>
      </a>
    </span>
  );
};
