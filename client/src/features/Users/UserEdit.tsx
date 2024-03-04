import { FC, useState } from 'react';
import { PartialUser } from '../../types';
import { eventHandler, submitHandler } from '../../utils';
import styles from './Users.module.css';
import { useAppSelector } from '../../hooks';
import { selectUserLoading } from '../../store';

interface Props {
  user: PartialUser;
  onSubmit: (user: PartialUser) => void;
}

const initialState: PartialUser = { name: '', company: '', location: '', bio: '' };

export const UserEdit: FC<Props> = ({ user = initialState, onSubmit }) => {
  const loading = useAppSelector(selectUserLoading);
  const { 0: state, 1: setState } = useState<PartialUser>(user);
  const onChange = eventHandler(setState);
  const onFormSubmit = submitHandler(onSubmit, state);

  return (
    <form onSubmit={onFormSubmit} className={styles.user__edit}>
      <div className={styles.user__edit_input}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={state.name} onChange={onChange} />
      </div>
      <div className={styles.user__edit_input}>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" value={state.company} onChange={onChange} />
      </div>
      <div className={styles.user__edit_input}>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" value={state.location} onChange={onChange} />
      </div>
      <div className={styles.user__edit_input}>
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio" value={state.bio} onChange={onChange} />
      </div>
      <div className={styles.user__edit_submit}>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </div>
    </form>
  );
};
