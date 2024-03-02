import { useEffect } from 'react';
import Page from '../../components/UI/wrappers/Page';
import { Profile } from '../../features';
import { useAppDispatch } from '../../hooks';
import { getUserData } from '../../store/userSlice';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <Page title="Profile">
      <Profile />
    </Page>
  );
};
