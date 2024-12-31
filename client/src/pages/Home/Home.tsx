import { useEffect } from 'react';
import { Loader } from '../../components/icons';
import { User } from '../../features';
import { useAppDispatch } from '../../hooks';
import { getUser, useUser } from '../../store';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useUser();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return loading ? <Loader /> : <User user={user} />;
};
