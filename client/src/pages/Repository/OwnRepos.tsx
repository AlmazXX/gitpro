import { useEffect, useState } from 'react';
import { Loader } from '../../components/icons';
import { ReposList, ReposToggler } from '../../features';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOwnRepos, selectRepos, selectReposLoading } from '../../store';

export const OwnRepos = () => {
  const dispatch = useAppDispatch();
  const repos = useAppSelector(selectRepos);
  const loading = useAppSelector(selectReposLoading);
  const { 0: isPrivate, 1: setIsPrivate } = useState(false);

  useEffect(() => {
    dispatch(getOwnRepos(isPrivate));
  }, [isPrivate, dispatch]);

  return (
    <>
      <ReposToggler state={isPrivate} setState={setIsPrivate} />
      {loading ? <Loader /> : <ReposList repos={repos} />}
    </>
  );
};
