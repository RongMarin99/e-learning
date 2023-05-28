export default ({ app, redirect, route, store }) => {
	if (store.state.auth.token) {
		if (route.name && route.name.includes('login')) {
			redirect(app.localePath('/'))
		}
	}
}