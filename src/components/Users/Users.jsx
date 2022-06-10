import UserCard from "./UserCard/UserCard";
import classes from './User.module.css';
import axios from "axios";

const Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => props.setUsers(response.data.items))
    }
  }


  let users = props.users.map(u => {

    return <UserCard
      key={u.id}
      id={u.id}
      name={u.name}
      status={u.status}
      followed={u.followed}
      photos={u.photos}
      follow={props.follow}
    />
  })
  return (
    <div className={classes.users}>
      {users}
      <button onClick={getUsers}>SHOW MORE</button>
    </div>
  )
}

export default Users;
