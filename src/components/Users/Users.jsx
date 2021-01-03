import useRequest from '../../hooks/useRequest';
import User, { UserSkeleton } from './User';
import './Users.scss';

const Users = () => {
  const {
    responseData,
    isFetching,
    error
  } = useRequest('https://reqres.in/api/users?page=1');

  const usersData = responseData && responseData.data;

  const users = isFetching
    ? Array.from(Array(6), () => 1).map((_, i) => <UserSkeleton key={i} />)
    : usersData.map((user) => <User
      key={user.id}
      name={`${user.first_name} ${user.last_name}`}
      email={user.email}
      avatar={user.avatar}
    />);

  return (
    <section className="users">
      {error}
      {users}
    </section>
  )
}

export default Users;
