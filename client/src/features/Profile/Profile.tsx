import { Link } from 'react-router-dom';
import { Company, Edit, Email, Follows, Location, Repository, Url } from '../../components/icons';
import { useAppSelector } from '../../hooks';
import { selectUser } from '../../store/userSlice';
import { formatNumber } from '../../utils';
import styles from './Profile.module.css';

export const Profile = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className={styles.profile}>
      <div className={styles.profile_main}>
        <div className={styles.profile_avatar_cover}>
          <img
            src={user?.avatar_url || user?.gravatar_id}
            alt="user_avatar"
            width="auto"
            height="auto"
            className={styles.profile_avatar}
          />
        </div>
        <div className={styles.profile_personal}>
          <h1 className={styles.profile_name}>{user?.name}</h1>
          <span className={styles.profile_login}>{user?.login}</span>
        </div>
        <div className={styles.profile_actions}>
          <Link to="/repositories">
            <Repository /> <span>Repositories</span>
          </Link>
          <Link to="/edit">
            <Edit /> <span>Edit</span>
          </Link>
        </div>
      </div>
      <div className={styles.profile_additional}>
        {user?.bio && (
          <div className={styles.profile_bio}>
            <span>{user?.bio}</span>
          </div>
        )}
        <div className={styles.profile_follows}>
          <a href={user?.followers_url} target="_blank" rel="noreferrer">
            <Follows /> <span>{formatNumber(user?.followers)}</span> followers
          </a>{' '}
          ·{' '}
          <a href={user?.following_url} target="_blank" rel="noreferrer">
            <span>{formatNumber(user?.following)}</span> following
          </a>
        </div>
        <ul className={styles.profile_details}>
          {user?.company && (
            <li className={styles.profile_detail}>
              <Company />
              {user?.company}
            </li>
          )}
          {user?.location && (
            <li className={styles.profile_detail}>
              <Location />
              <span>{user?.location}</span>
            </li>
          )}
          {user?.email && (
            <li className={styles.profile_detail}>
              <Email />
              <a href={'mailto:' + user?.email}>{user?.email}</a>
            </li>
          )}
          {user?.html_url && (
            <li className={styles.profile_detail}>
              <Url />
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                {user?.html_url}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
