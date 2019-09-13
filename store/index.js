export const state = () => ({
  user: null
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

export const actions = {
  login({ commit }, profile) {
    commit('SET_USER', profile);
  },

  logout({ commit }) {
    commit('SET_USER', null);
  }
};
