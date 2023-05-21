import Cookies from 'js-cookie'

let alreadyDone = false
export default async ({ context, store, app }) => {
	if (alreadyDone) {
		return null
	} 
	alreadyDone = true
	const token = app.$cookies.get('e')
	if (token) {
		store.dispatch('auth/saveToken', token)
		await store.dispatch('initStore')
		//await store.dispatch('auth/fetchUser')
	}
	// let newLocale = Cookies.get('vip-lang')
	// if (newLocale == null) {
	// 	newLocale = store.state.i18n.locale
	// }
	// store.dispatch('lang/setLocale', {
	// 	locale: newLocale
	// })
	/* ... */
}
