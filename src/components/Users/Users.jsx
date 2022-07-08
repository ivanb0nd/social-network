import React from "react";
import UserCard from "./UserCard/UserCard";
import classes from './Users.module.css';
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
      .catch(error => { console.log(error) })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
      .catch(error => { console.log(error) })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={classes.users}>
        <div className={classes.users_pagination}>
          {pages.map(p => {
            return <button onClick={() => this.onPageChanged(p)} key={p} className={this.props.currentPage === p ? classes.selectedPage : ''}>{p}</button>
          })}
        </div>

        <div className={classes.users_list}>
          {this.props.users.map(user => <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            status={user.status}
            followed={user.followed}
            photos={user.photos}
            follow={this.props.follow}
          />)}
        </div>
      </div>
    )
  }
}

export default Users;
