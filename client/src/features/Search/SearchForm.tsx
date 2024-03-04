import { ChangeEvent, FC } from 'react';
import styles from './Search.module.css';
import { Search } from '../../components/icons';

interface Props {
  search: (arg: string) => void;
}

export const SearchForm: FC<Props> = ({ search }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    search(value);
  };

  return (
    <div className={styles.search_form}>
      <Search />
      <input type="text" onChange={onChange} />
    </div>
  );
};
