import React from "react";
import UserCard from "./UserCard/UserCard";
import classes from './Users.module.css';

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={classes.users}>
      <div className={classes.users_pagination}>
        {pages.map(p => {
          return <button onClick={() => props.onPageChanged(p)} key={p} className={props.currentPage === p ? classes.selectedPage : ''}>{p}</button>
        })}
      </div>

      <div className={classes.users_list}>
        {props.users.map(user => <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          status={user.status}
          followed={user.followed}
          photos={user.photos}
          follow={props.follow}
        />)}
      </div>
    </div>
  )
}

export default Users;
