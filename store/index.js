export const actions = {
	async initStore({ commit, dispatch }) {
		const data = await this.$axios.$post('getUser')
		dispatch('auth/fetchUser', {
			token: data.access_token,
			expired_date: data.expired_date,
			user: data.user,
		})
		// await dispatch('auth/getNameAndLogo', data.data.name_and_logo_main)
		// dispatch('company/setCompany', data.data.companies)
		// dispatch('setting/set', data.data.setting)
		// dispatch('lib/setTitle', data.data.title)
		// dispatch('lib/setGender', data.data.gender)
		// dispatch('font/setFont', data.data.vs_font)
		// dispatch('lib/setMaritalStatus', data.data.marital_status)
		// dispatch('gender/setGenders', data.data.genders)
		// dispatch('currency/setCurrencies', data.data.currency)
		// let selectedCompany = Cookies.get('SELECTED_COMPANY')
		// dispatch('company/setSelectedCompany', selectedCompany)
	}
}