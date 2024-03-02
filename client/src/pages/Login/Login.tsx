import { LoginForm } from '../../features';
import styles from './Login.module.css';

export function Login() {
  return (
    <div className={styles.login_page}>
      <LoginForm />
    </div>
  );
}
