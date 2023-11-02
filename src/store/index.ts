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
    addUser(state, newUser) {
      if(newUser.id !== undefined && typeof newUser.name == 'string' && typeof newUser.email == 'string') {
          state.users.push({
              id: newUser.id,
              name: newUser.name,
              email: newUser.email
          })
      }
    },
    loadStore() {
      if(localStorage.getItem('store')) {
          try {
              this.replaceState(JSON.parse(localStorage.getItem("store")));
          }
          catch(e) {
              console.log('Could not initialize store', e);
          }
      }
  }
  },
  actions: {
  },
  modules: {
  }
})
