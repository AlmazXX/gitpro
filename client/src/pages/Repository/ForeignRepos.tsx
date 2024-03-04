import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/icons';
import { ReposList } from '../../features';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectRepos } from '../../store';
import { getRepos, selectReposLoading } from '../../store/reposSlice';

export const ForeignRepos = () => {
  const dispatch = useAppDispatch();
  const repos = useAppSelector(selectRepos);
  const loading = useAppSelector(selectReposLoading);
  const { user = '' } = useParams();

  useEffect(() => {
    dispatch(getRepos(user));
  }, [user, dispatch]);

  return loading ? <Loader /> : <ReposList repos={repos} />;
};
