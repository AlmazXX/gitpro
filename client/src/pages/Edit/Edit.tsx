import { useEffect } from 'react';
import { UserEdit } from '../../features';
import { useAppDispatch } from '../../hooks';
import { editUser, getUser, useUser } from '../../store';
import { PartialUser } from '../../types';

export const Edit = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();

  const onSubmit = (user: PartialUser) => {
    dispatch(editUser(user));
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return user && <UserEdit user={user} onSubmit={onSubmit} />;
};
