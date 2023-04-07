export const state = () => ({
	article: ''
})

// getters
export const getters = {
	article: state => state.article
}

// mutations
export const mutations = {
	SET_ARTICLE(state, article) {
		state.article = article
	}
}

// action
export const actions = {
	setArticle({ commit }, article) {
        console.log(article);
		commit('SET_ARTICLE', article)
	}
}

