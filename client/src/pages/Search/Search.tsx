import { Loader } from '../../components/icons';
import { SearchHead, UsersList } from '../../features';
import { useAppDispatch, useAppSelector, useDebounce } from '../../hooks';
import { searchUsers, selectUserLoading, selectUsers, selectUsersTotalCount } from '../../store';

export const Search = () => {
  const users = useAppSelector(selectUsers);
  const loading = useAppSelector(selectUserLoading);
  const totalCount = useAppSelector(selectUsersTotalCount);
  const dispatch = useAppDispatch();
  const debouncedSearch = useDebounce((value) => dispatch(searchUsers(value)), 500);

  return (
    <>
      <SearchHead totalCount={totalCount} debouncedSearch={debouncedSearch} />
      {loading ? <Loader /> : <UsersList users={users} />}
    </>
  );
};
