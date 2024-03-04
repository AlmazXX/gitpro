import { FC } from 'react';
import { User } from '..';
import Empty from '../../components/UI/empty/Empty';
import { IUser } from '../../types';
import styles from './Users.module.css';

interface Props {
  users: IUser[];
}

export const UsersList: FC<Props> = ({ users }) => {
  return users.length ? (
    <div className={styles.user__list}>
      {users.map((user) => (
        <User key={user.html_url} user={user} />
      ))}
    </div>
  ) : (
    <Empty />
  );
};
