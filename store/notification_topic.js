export const state = () => ({
	topics: [
		{
			value: '78',
			name: 'seller',
			group_name: 'SELLER1'
		},
		{
			value: '79',
			name: 'payment',
			group_name: 'PAYMENT1'
		}
	],
	// sendUrL: 'https://fcm.googleapis.com/fcm/send',
	// url: 'https://iid.googleapis.com/iid/v1/',
	// serverKey: 'AIzaSyDA6f6fU-ehYftALq6XwoOzpcdvGceC8KE'
	sendUrL: process.env.SENDURL,
	url: process.env.URL,
	serverKey: process.env.SERVERKEY
})

export const getters = {
	topics: state => state.topics,
	getSubscribeTopicUrl: state => value => {
		return state.url + value + '/rel/topics/'
	},
	getGroupNameById: state => value => {
		return state.topics.find(obj => obj.value == value).group_name
	},
	getToTopic: state => value => {
		return '/topics/' + value.code + '_' + value.group_name
	}
}

export const mutations = {
	SEND_NOTIFICATIONS(state, data) {
		let vm = this

		this.$axios({
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'key=AAAAS5fmpX4:APA91bGWPsdApIRw8Ku6lwA33UhiqEDRXjbJKiWuU5XOSFE0l5wNxR0htMjDlvooNu3S2IKauapB2Co4UrG70oRkj8BtdCBJAA6mwA0EwO219QZ5N8559YcXd5CmTfv5ackrsT5uWcBk' 
			},
			baseURL: 'https://fcm.googleapis.com/fcm/send',
			data: {
                  "to" : '/topics/e-learning',
                  "notification": {
                    "title": "Background Message Title",
                    "body": "Background message body"
                  },
                  "data" : {
                    "body" : "great match!",
                    "content_available" : true,
                    "priority" : "high",
                    "title" : "Portugal vs. Denmark"
                    },
                  "webpush": {
                    "fcm_options": {
                      "link": "https://dummypage.com"
                    }
                  }
                
              }
		})
			.then()
			.catch(err => {
				console.log(err)
			})
	},
	async SEND_TO_TOPIC(state, data) {
		let vm = this
		await vm
			.$axios({
				method: data.action,
				baseURL: data.url,
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'key=' + state.serverKey
				}
			})
			.then(res => {})
			.catch(function(err) {
				console.log(err)
			})
	}
}

export const actions = {
	sendNoficaitions({ commit }, data) {
		commit('SEND_NOTIFICATIONS', data)
	},
	subscribeToTopic({ commit }, url) {
		let data = {
			url: url,
			action: 'POST'
		}
		commit('SEND_TO_TOPIC', data)
	},
	unSubscribeToTopic({ commit }, url) {
		let data = {
			url: url,
			action: 'DELETE'
		}
		commit('SEND_TO_TOPIC', data)
	}
}
