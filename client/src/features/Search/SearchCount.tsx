import { FC } from 'react';
import { formatNumber } from '../../utils';
import styles from './Search.module.css';

interface Props {
  totalCount: number;
}

export const SearchCount: FC<Props> = ({ totalCount }) => {
  return totalCount ? <p className={styles.search_count}>{formatNumber(totalCount)} users</p> : null;
};
