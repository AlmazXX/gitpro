import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutUser, useUser } from '../../store';
import styles from './Auth.module.css';

export const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useUser();

  const onClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <button onClick={onClick} className={styles.auth_logout} disabled={loading}>
      Log out
    </button>
  );
};
