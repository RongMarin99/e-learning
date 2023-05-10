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
        Cookies.remove('pms-chhaythai-cookies')
    },

    LOGOUT(state) {
        state.user = {}
        state.token = null
        state.roleModules = []
        state.authLevel = null
        Cookies.remove('pms-chhaythai-cookies')
    },
}

export const actions = { 
    login({ commit }, { access_token, user, role_modules, auth_level }) {
        console.log(user);
       
        commit('SAVE_TOKEN', access_token)
        commit('FETCH_USER_SUCCESS', user)
       
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
	fetchUser({ commit }, { user, role_modules, auth_level}) {
				try {
					commit('FETCH_USER_SUCCESS', user)
					commit('SET_ROLE_MODULE', role_modules)
					commit('SET_AUTH_LEVEL', auth_level)
				} catch (e) {
					commit('FETCH_USER_FAIL')
				}
	},
			async logout({ state, commit }) {
				try {
					const input = { fcm_token: state.token }

					await this.$axios.$post('logout', input)

					commit('LOGOUT')
				} catch (e) {
					commit('LOGOUT')
				}
			},
			clearLogout({ commit }) {
				commit('LOGOUT')
			},
}