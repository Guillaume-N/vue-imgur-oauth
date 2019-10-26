const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  // commit allows us to commit mutations
  logout: ({ commit }) => {
    commit("setToken", null);
  }
};
