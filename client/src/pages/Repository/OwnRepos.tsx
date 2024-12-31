import { useEffect, useState } from 'react';
import { Loader } from '../../components/icons';
import { ReposList, ReposToggler } from '../../features';
import { useAppDispatch } from '../../hooks';
import { getOwnRepos, useRepo } from '../../store';

export const OwnRepos = () => {
  const dispatch = useAppDispatch();
  const { list: repos, loading } = useRepo();
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
