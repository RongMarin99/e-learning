import Cookies from 'js-cookie'

export const state = () => ({
    user: null,
    token: null,
    roleModules: [],
    authLevel: null,
    firebase_token: null
})

export const getters = {
    user: state => state.user,
    token: state => state.token,
    roleModules: state => state.roleModules,
    authLevel: state => state.authLevel,
    firebaseToken: state => state.firebase_token
}

export const mutations = {
    SAVE_TOKEN(state, access_token) {
        state.token = access_token
    },

    FETCH_USER_SUCCESS(state, user) {
        state.user = user
    },

    SET_ROLE_MODULE(state, roleModules) {
        state.roleModules = roleModules
    },
    SET_USER_AUTH_TOKEN(state, token) {
      //  state.user.auth_token = token
      state.firebase_token = token
    },
    SET_AUTH_LEVEL(state, authLevel) {
        state.authLevel = authLevel
    },

    FETCH_USER_FAIL(state, user) {
        state.token = null
        Cookies.remove('e')
    },

    LOGOUT(state) {
        state.user = null
        state.token = null
        //state.roleModules = []
        //state.authLevel = null
        Cookies.remove('e')
    },
}

export const actions = { 
    login({ commit }, { token, user, expired_date }) {
       
        commit('SAVE_TOKEN', token)
        commit('FETCH_USER_SUCCESS', user)
        Cookies.set('e', token, { expires: expired_date })
        // commit('SET_ROLE_MODULE', role_modules)
        // commit('SET_AUTH_LEVEL', auth_level)
        // Cookies.set('pms-chhaythai-cookies', token, {
        //     expires: 7
        // })
	}, 
    setUserAuthToken({ commit }, token) {
		commit('SET_USER_AUTH_TOKEN', token)
	}, 
    saveToken({ commit }, token) {
				commit('SAVE_TOKEN', token)
				// Cookies.set('c', token, { expires: 3600 })
	},
	fetchUser({ commit }, { token, user, expired_date }) {
        try {
            commit('FETCH_USER_SUCCESS', user)
        } catch (e) {
            commit('FETCH_USER_FAIL')
        }
	},
    async logout({ state, commit }) {
        try {
            //const input = { fcm_token: state.token }

            await this.$axios.$post('logout')

            commit('LOGOUT')
        } catch (e) {
            commit('LOGOUT')
        }
    },
    clearLogout({ commit }) {
        commit('LOGOUT')
    },
}