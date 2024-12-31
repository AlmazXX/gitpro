import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/icons';
import { ReposList } from '../../features';
import { useAppDispatch } from '../../hooks';
import { getRepos, useRepo } from '../../store';

export const ForeignRepos = () => {
  const dispatch = useAppDispatch();
  const { list: repos, loading } = useRepo();
  const { user = '' } = useParams();

  useEffect(() => {
    dispatch(getRepos(user));
  }, [user, dispatch]);

  return loading ? <Loader /> : <ReposList repos={repos} />;
};
