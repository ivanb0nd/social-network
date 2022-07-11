import React from 'react';
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
        <button onClick={props.switchToPrevPage} disabled={props.currentPage === 1 ? true : false} className={`primary_button ${classes.prevButton} ${classes.paginationButton} `}>Prev</button>
        {pages.length > 10 && (props.currentPage === 1 || props.currentPage === pages.length)
          ? <div className={classes.pagesList}>
            <button onClick={() => props.onPageChanged(1)} key={1} className={props.currentPage === 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{1}</button>
            <button onClick={() => props.onPageChanged(2)} key={2} className={props.currentPage === 2 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{2}</button>
            <span>...</span>
            <button onClick={() => props.onPageChanged(pages.length - 1)} key={pages.length - 1} className={props.currentPage === pages.length - 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length - 1}</button>
            <button onClick={() => props.onPageChanged(pages.length)} key={pages.length} className={props.currentPage === pages.length ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length}</button>
          </div>
          : pages.length > 10 && props.currentPage === pages.length - 1 ?
            <div className={classes.pagesList}>
              <button onClick={() => props.onPageChanged(1)} key={1} className={props.currentPage === 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{1}</button>
              <button onClick={() => props.onPageChanged(2)} key={2} className={props.currentPage === 2 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{2}</button>
              <span>...</span>
              <button onClick={() => props.onPageChanged(pages.length - 1)} key={pages.length - 1} className={props.currentPage === pages.length - 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length - 1}</button>
              <button onClick={() => props.onPageChanged(pages.length)} key={pages.length} className={props.currentPage === pages.length ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length}</button>
            </div>
            : pages.length > 10 && props.currentPage === pages.length - 2 ?
              <div className={classes.pagesList}>
                <button onClick={() => props.onPageChanged(1)} key={1} className={props.currentPage === 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{1}</button>
                <span>...</span>
                <button onClick={() => props.onPageChanged(pages.length - 2)} key={pages.length - 2} className={props.currentPage === pages.length - 2 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length - 2}</button>
                <button onClick={() => props.onPageChanged(pages.length - 1)} key={pages.length - 1} className={props.currentPage === pages.length - 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length - 1}</button>
                <button onClick={() => props.onPageChanged(pages.length)} key={pages.length} className={props.currentPage === pages.length ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length}</button>
              </div>
              : pages.length > 10 && (props.currentPage !== 1 || props.currentPage !== pages.length - 1) ?
                <div className={classes.pagesList}>
                  <button onClick={() => props.onPageChanged(props.currentPage - 1)} key={props.currentPage - 1} className={props.currentPage === props.currentPage - 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{props.currentPage - 1}</button>
                  <button onClick={() => props.onPageChanged(props.currentPage)} key={props.currentPage} className={`primary_button ${classes.selectedPage} ${classes.paginationButton}`}>{props.currentPage}</button>
                  <span>...</span>
                  <button onClick={() => props.onPageChanged(pages.length - 1)} key={pages.length - 1} className={props.currentPage === pages.length - 1 ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length - 1}</button>
                  <button onClick={() => props.onPageChanged(pages.length)} key={pages.length} className={props.currentPage === pages.length ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{pages.length}</button>
                </div> : <div className={classes.users_pagination}>
                  {pages.map(p => {
                    return <button onClick={() => props.onPageChanged(p)} key={p} className={props.currentPage === p ? `primary_button ${classes.selectedPage} ${classes.paginationButton}` : `primary_button ${classes.paginationButton}`}>{p}</button>
                  })}
                </div>
        }

        <button onClick={props.switchToNextPage} disabled={props.currentPage === pages.length ? true : false} className={`primary_button ${classes.nextButton} ${classes.paginationButton}`}>Next</button>
      </div>

      <div className={classes.users_list}>
        {props.users.map(user => <UserCard
          country={user.country}
          city={user.city}
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
