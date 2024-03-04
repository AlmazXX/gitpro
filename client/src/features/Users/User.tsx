import { FC } from 'react';
import { Link } from 'react-router-dom';
import Empty from '../../components/UI/empty/Empty';
import { Company, Edit, Email, Follows, Location, Repository, Url } from '../../components/icons';
import { IUser } from '../../types';
import { formatNumber } from '../../utils';
import styles from './Users.module.css';

interface Props {
  user: IUser | null;
}

export const User: FC<Props> = ({ user }) => {
  return user ? (
    <div className={styles.user__card}>
      <div className={styles.user__card_main}>
        <div className={styles.user__card_avatar_cover}>
          <img
            src={user.gravatar_id || user.avatar_url}
            alt="user_avatar"
            width="auto"
            height="auto"
            className={styles.user__card_avatar}
          />
        </div>
      </div>
      <div className={styles.user__card_additional}>
        <div className={styles.user__card_personal}>
          <h1 className={styles.user__card_name}>{user.name}</h1>
          <span className={styles.user__card_login}>{user.login}</span>
        </div>
        {user.bio && (
          <div className={styles.user__card_bio}>
            <span>{user.bio}</span>
          </div>
        )}
        <div className={styles.user__card_actions}>
          <Link to={`/app/repositories/${user.name ? '' : user.login}`}>
            <Repository /> <span>Repositories</span>
          </Link>
          {user.name ? (
            <Link to="/app/edit">
              <Edit /> <span>Edit</span>
            </Link>
          ) : null}
        </div>
        <div className={styles.user__card_follows}>
          <a href={user.followers_url} target="_blank" rel="noreferrer">
            <Follows /> <span>{formatNumber(user.followers)}</span> followers
          </a>{' '}
          ·{' '}
          <a href={user.following_url} target="_blank" rel="noreferrer">
            <span>{formatNumber(user.following)}</span> following
          </a>
        </div>
        <ul className={styles.user__card_details}>
          {user.company && (
            <li className={styles.user__card_detail}>
              <Company />
              {user.company}
            </li>
          )}
          {user.location && (
            <li className={styles.user__card_detail}>
              <Location />
              <span>{user.location}</span>
            </li>
          )}
          {user.email && (
            <li className={styles.user__card_detail}>
              <Email />
              <a href={'mailto:' + user.email}>{user.email}</a>
            </li>
          )}
          {user.html_url && (
            <li className={styles.user__card_detail}>
              <Url />
              <a href={user.html_url} target="_blank" rel="noreferrer">
                {user.html_url}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  ) : (
    <Empty />
  );
};
