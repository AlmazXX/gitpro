import { useEffect } from 'react';
import { Loader } from '../../components/icons';
import { User } from '../../features';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser, selectUser, selectUserLoading } from '../../store/userSlice';

export const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectUserLoading);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return loading ? <Loader /> : <User user={user} />;
};
