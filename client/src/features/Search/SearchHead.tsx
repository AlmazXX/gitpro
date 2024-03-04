import { FC } from 'react';
import { SearchCount, SearchForm } from '..';
import styles from './Search.module.css';

interface Props {
  debouncedSearch: (arg: string) => void;
  totalCount: number;
}

export const SearchHead: FC<Props> = ({ debouncedSearch, totalCount }) => {
  return (
    <div className={styles.search_head}>
      <SearchForm search={debouncedSearch} />
      <SearchCount totalCount={totalCount} />
    </div>
  );
};
