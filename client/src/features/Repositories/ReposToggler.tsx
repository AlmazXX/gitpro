import { Dispatch, FC, SetStateAction } from 'react';
import styles from './Repositories.module.css';

interface Props {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export const ReposToggler: FC<Props> = ({ state, setState }) => {
  const togglePublic = () => {
    setState(false);
  };

  const togglePrivate = () => {
    setState(true);
  };

  return (
    <div className={styles.repositories_toggle}>
      <button onClick={togglePublic} className={state ? '' : styles.active}>
        Public
      </button>
      <button onClick={togglePrivate} className={state ? styles.active : ''}>
        Private
      </button>
    </div>
  );
};
