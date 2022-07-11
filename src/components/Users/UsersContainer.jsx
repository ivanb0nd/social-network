import { connect } from 'react-redux'
import { nextPageAC, prevPageAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC, toggleIsFetchingAC } from "../../redux/users-reducer"
import Users from './Users'
import axios from 'axios'
import React from 'react'
import Preloader from '../Preloader/Preloader'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(toggleFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },
    nextPage: () => {
      dispatch(nextPageAC())
    },
    prevPage: () => {
      dispatch(prevPageAC())
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.toggleIsFetching(false)
      })
      .catch(error => { console.log(error) })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
      })
      .catch(error => { console.log(error) })
  }

  switchToNextPage = () => {
    let newPageNumber = this.props.currentPage + 1;
    this.props.nextPage();
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
      })
      .catch(error => { console.log(error) })
  }

  switchToPrevPage = () => {
    let newPageNumber = this.props.currentPage - 1;
    this.props.prevPage();
    this.props.toggleIsFetching(true)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
      })
      .catch(error => { console.log(error) })
  }

  render() {


    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          switchToNextPage={this.switchToNextPage}
          switchToPrevPage={this.switchToPrevPage}
        />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

