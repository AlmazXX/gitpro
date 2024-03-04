import { IRepo } from '../../types';
import { FC } from 'react';
import styles from './Repositories.module.css';
import { Repository } from '../../components/icons';

interface Props {
  repo: IRepo;
}

export const Repo: FC<Props> = ({ repo }) => {
  return (
    <div className={styles.repo}>
      <div>
        <a href={repo.html_url} className={styles.repo_name} target="_blank" rel="noreferrer">
          <Repository />
          <span>{repo.name}</span>
        </a>
      </div>
      <div>
        <a href={repo.owner_html_url} className={styles.repo_owner} target="_blank" rel="noreferrer">
          {repo.owner_login}
        </a>
      </div>
    </div>
  );
};
