import { FC } from 'react';
import { Repo } from '..';
import Empty from '../../components/UI/empty/Empty';
import { IRepo } from '../../types';
import styles from './Repositories.module.css';

interface Props {
  repos: IRepo[];
}

export const ReposList: FC<Props> = ({ repos }) => {
  return repos.length ? (
    <div className={styles.repositories_wrapper}>
      {repos.map((repo) => (
        <Repo key={repo.html_url} repo={repo} />
      ))}
    </div>
  ) : (
    <Empty />
  );
};
