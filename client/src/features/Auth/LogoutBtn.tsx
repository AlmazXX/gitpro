import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutUser, selectUserLogingOut } from '../../store';
import styles from './Auth.module.css';

export const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLogingOut);

  const onClick = () => {
    dispatch(logoutUser());
    navigate('/app/login');
  };

  return (
    <button onClick={onClick} className={styles.auth_logout} disabled={loading}>
      Log out
    </button>
  );
};
