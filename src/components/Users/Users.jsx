import React from "react";
import UserCard from "./UserCard/UserCard";
import classes from './Users.module.css';
import axios from "axios";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => this.props.setUsers(response.data.items))
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className={classes.users}>
        {this.props.users.map(user => <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          status={user.status}
          followed={user.followed}
          photos={user.photos}
          follow={this.props.follow}
        />)}
        <button onClick={this.getUsers}>SHOW MORE</button>
      </div>
    )
  }
}

export default Users;
