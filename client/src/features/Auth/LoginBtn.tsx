import { GitHub } from '../../components/icons';
import { GITHUB_OAUTH_LINK } from '../../constants';
import styles from './Auth.module.css';

function loginWithGithub() {
  window.location.assign(GITHUB_OAUTH_LINK);
}

export const LoginBtn = () => {
  return (
    <span className={styles.auth__gh_wrap}>
      <button className={styles.uauth__gh_btn} onClick={loginWithGithub}>
        <span className={styles.auth__gh_icon}>
          <GitHub />
        </span>
        <span>Sign up with GitHub</span>
      </button>
    </span>
  );
};
