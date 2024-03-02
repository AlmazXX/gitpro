import { GITHUB_OAUTH_LINK } from '../../../../constants';
import { GitHub } from '../../../icons';
import styles from './GitHubBtn.module.css';

function loginWithGithub() {
  window.location.assign(GITHUB_OAUTH_LINK);
}

const GitHubButton = () => {
  return (
    <span className={styles.github_wrap}>
      <button className={styles.github_btn} onClick={loginWithGithub}>
        <span className={styles.github_icon}>
          <GitHub />
        </span>
        <span>Sign up with GitHub</span>
      </button>
    </span>
  );
};

export default GitHubButton;
