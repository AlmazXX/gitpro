import { Loader } from '../../components/icons';
import { SearchHead, UsersList } from '../../features';
import { useAppDispatch, useDebounce } from '../../hooks';
import { searchUsers, useUser } from '../../store';

export const Search = () => {
  const { list: users, loading, total_count } = useUser();

  const dispatch = useAppDispatch();
  const debouncedSearch = useDebounce((value) => dispatch(searchUsers(value)), 500);

  return (
    <>
      <SearchHead totalCount={total_count} debouncedSearch={debouncedSearch} />
      {loading ? <Loader /> : <UsersList users={users} />}
    </>
  );
};
