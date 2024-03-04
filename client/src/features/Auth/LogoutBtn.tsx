import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutUser } from '../../store';
import styles from './Auth.module.css';

export const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logoutUser());
    navigate('/app/login');
  };

  return (
    <button onClick={onClick} className={styles.auth_logout}>
      Log out
    </button>
  );
};
