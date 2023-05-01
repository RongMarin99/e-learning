export const state = () =>({
    in_progress: false,
    overlay: true
})

export const getters = {
    getInProgress: state => state.in_progress,
    getOverlay: state => state.overlay,
}

export const mutations = {
    SET_IN_PROGRESS(state, in_progress) {
        state.in_progress = in_progress;
    },
    SET_OVERLAY(state, overlay) {
        state.overlay = overlay;
    },
};

export const actions = {
    setInProgress({ commit }, in_progress) {
        commit('SET_IN_PROGRESS', in_progress);
    },
    setOverlay({ commit }, overlay) {
        commit('SET_OVERLAY', overlay);
    },
};