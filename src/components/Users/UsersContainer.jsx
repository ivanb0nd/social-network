import { connect } from 'react-redux'
import { nextPage, prevPage, setCurrentPage, setTotalUsersCount, setUsers, follow, toggleIsFetching } from "../../redux/users-reducer"
import Users from './Users'
import axios from 'axios'
import React from 'react'
import Preloader from '../Preloader/Preloader'

const mapStateToProps = (state) => {
	return {
		state: state,
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

class UsersContainer extends React.Component {
	componentDidMount() {
		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true)
			axios
				.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
					withCredentials: true,
				})
				.then(response => {
					this.props.setUsers(response.data.items)
					this.props.setTotalUsersCount(response.data.totalCount)
					this.props.toggleIsFetching(false)
				})
				.catch(error => { console.log(error) })
		}
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
				withCredentials: true
			})
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

export default connect(mapStateToProps, { follow, setUsers, setCurrentPage, setTotalUsersCount, nextPage, prevPage, toggleIsFetching })(UsersContainer);

