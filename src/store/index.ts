import { createStore } from 'vuex'

export default createStore({
  state: {
      users: [
          { id: '1', name: 'Mahmoud Abdelsalam', email: '7oda@gmail.com' }
      ]
  },
  getters: {
    users (state) {
      // state variable contains our state data
      return state.users;
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
