import { connect } from "react-redux"
import { nextPageAC, prevPageAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC } from "../../redux/users-reducer"
import Users from "./Users"
import axios from 'axios'
import React from "react"

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    }
  }
}

class UsersContainer extends React.Component {
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

  switchToNextPage = () => {
    let newPageNumber = this.props.currentPage + 1;
    this.props.nextPage();
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
      .catch(error => { console.log(error) })
  }

  switchToPrevPage = () => {
    let newPageNumber = this.props.currentPage - 1;
    this.props.prevPage();
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
      .then(response => this.props.setUsers(response.data.items))
      .catch(error => { console.log(error) })
  }

  render() {


    return (
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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

