import swal from 'sweetalert2'

export default function ({ $axios, store, app, redirect }) {
    $axios.onRequest((request) => {
        // const token = store.state.auth.token || ''
        // if (token) {
        //     request.headers.common.Authorization = `Bearer ${token}`
        // }
        // const locale = store.getters['lang/locale']
        // if (locale) {
        //     request.headers['Accept-Language'] = locale
        // }
        let loading = true
        let overlay = true
        if (request.data != undefined) {
            if (request.data.loading != undefined)
                loading = request.data.loading
            if (request.data.overlay != undefined)
                overlay = request.data.overlay
        }
        store.dispatch('loading/setInProgress', loading)
        return request
    })

    /**
     * middleware for response
     */
    $axios.onResponse((response) => {
        store.dispatch('loading/setInProgress', false)
        if (!response) {
            swal.fire('No data', 'No response data.', 'warning');
        }
        return response
    })

    // $axios.onError((error) => {
    //     store.dispatch('loading/setInProgress', false)
    //     if (!error.response) {
    //         swal.fire({
    //             icon: 'error',
    //             title: 'Oops...',
    //             text: 'Something went wrong.',
    //         })
    //         return
    //     }
    //     const { status } = error.response
    //     // Error 402
    //     if (status === 422) {
    //         let obj = error.response.data.errors
    //         let message = null
    //         for (const key in obj) {
    //             if (obj.hasOwnProperty(key)) {
    //                 const element = obj[key]
    //                 message = element[0]
    //                 break
    //             }
    //         }

    //         // let errorMsg = message.trim()
    //         // if (app.i18n.te(message.trim(), app.i18n.locale)) {
    //         //     errorMsg = app.i18n.messages[app.i18n.locale][message.trim()]
    //         // }
    //         // swal.fire({
    //         //     icon: 'warning',
    //         //     title: app.i18n.messages[app.i18n.locale]['validation_failed'],
    //         //     text: errorMsg,
    //         // })
    //     } else if (status == 424) {
    //         // let obj = error.response.data
    //         // let errorMsg = obj['message'].trim()
    //         // if (app.i18n.te(obj['i18n_message'], app.i18n.locale)) {
    //         //     errorMsg = app.i18n.messages[app.i18n.locale][obj['i18n_message']]
    //         // }
    //         // swal.fire({
    //         //     icon: 'warning',
    //         //     title: app.i18n.messages[app.i18n.locale]['validation_failed'],
    //         //     text: errorMsg,
    //         // })
    //     } else if (status == 401 && !store.state.auth.token) {
    //         // swal.fire({
    //         //     icon: 'warning',
    //         //     title:
    //         //         app.i18n.messages[app.i18n.locale][
    //         //         'token_expired_alert_title'
    //         //         ],
    //         //     text:
    //         //         app.i18n.messages[app.i18n.locale][
    //         //         'token_expired_alert_text'
    //         //         ],
    //         // }).then(async () => {
    //         //     store.dispatch('auth/clearLogout')
    //         //     redirect(app.localePath('login'))
    //         // })
    //     } else if (status == 401 && store.state.auth.token) {
    //         //store.dispatch('auth/clearLogout')
    //         //redirect(app.localePath('login'))
    //     } else if (status == 403) {
    //        // redirect('/403')
    //     } else if (status == 500) {
    //         // swal.fire({
    //         //     icon: 'error',
    //         //     text: app.i18n.messages[app.i18n.locale]['error_alert_text'],
    //         //     allowOutsideClick: false,
    //         // })
    //     }else if (status == 503) {
    //         //redirect(app.localePath('maintenance'))
    //     }
    // })
}
