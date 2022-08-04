import axios from "axios"

const socialNetworkAPI = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": '20f5c211-d0a1-474c-a715-82c47d390824'
	}
})

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return socialNetworkAPI
			.get(`users?page=${currentPage}&count=${pageSize}`, {
				withCredentials: true,
			})
			.then(response => response.data)
	},
	switchPage(newPageNumber, pageSize = 10) {
		return socialNetworkAPI
			.get(`users?page=${newPageNumber}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(userId) {
		return socialNetworkAPI
			.post(`follow/${userId}`)
			.then(response => response.data.resultCode)
	},
	unfollow(userId) {
		return socialNetworkAPI
			.delete(`follow/${userId}`)
			.then(response => response.data.resultCode)
	}

}
