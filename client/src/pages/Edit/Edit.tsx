import { useEffect } from 'react';
import { UserEdit } from '../../features';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser } from '../../store';
import { editUser, getUser } from '../../store/userSlice';
import { PartialUser } from '../../types';

export const Edit = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const onSubmit = (user: PartialUser) => {
    dispatch(editUser(user));
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return user && <UserEdit user={user} onSubmit={onSubmit} />;
};
