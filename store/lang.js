import Cookies from 'js-cookie'

export const state = () => ({
	locale: 'kh',
})

// getters
export const getters = {
	locale: state => state.locale,
	isLangEn: state => state.locale == 'en'
}

// mutations
export const mutations = {
	SET_LOCALE(state, locale) {
		state.locale = locale.locale
	}
}

// action
export const actions = {
	setLocale({ commit }, { locale }) {
		commit('SET_LOCALE', { locale })
		Cookies.set('e-leaning-lang', locale,{
			expires: 3600,
			domain: process.env.domain
		})

	}
}