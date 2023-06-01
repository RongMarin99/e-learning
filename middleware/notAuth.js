export default function({ app, store, redirect, route }) {
	if (!store.state.auth.token) {
		//	if (!store.state.auth.token && route.path!='/') {
		// let locale = app.i18n.locale === app.i18n.defaultLocale ? '' : '/' + app.i18n.locale;
		return redirect(app.localePath('/Login'))
	}
}
