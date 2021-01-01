import Skeleton from '../Skeleton';
import User from './User/User';

const Users = () => {
  return (
    <section className="users">
      <User />
      <Skeleton />
    </section>
  )
}

export default Users;
