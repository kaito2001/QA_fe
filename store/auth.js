export const state = () => ({
	user: null,
})

export const getters = {
	getUser: (state) => {
		return state.user
	},
}

export const mutations = {
	setUser(state, payload) {
		state.user = payload
	},
	removeUser(state, payload) {
		state.user = payload
	}
}

