import { createStore } from 'vuex'

export default createStore({
  state: {
      users: [
          { id: '1', name: 'Mahmoud Abdelsalam', mobile_no: '01284177867', paid_amount: "150", un_paid_amount: "150", sub_type: "GYM", sub_from: "1/11/2023" , sub_to: "1/12/2023" , sessions_count: "20" }
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
      if(newUser.id !== undefined && typeof newUser.name == 'string') {
          state.users.push({
              id: newUser.id,
              name: newUser.name,
              mobile_no: newUser.mobile_no,
              paid_amount: newUser.paid_amount,
              un_paid_amount: newUser.un_paid_amount,
              sub_type: newUser.sub_type,
              sub_from: newUser.sub_from,
              sub_to: newUser.sub_to,
              sessions_count: newUser.sessions_count
          })
      }
    },
    loadStore() {
      if(localStorage.getItem('store')) {
          try {
              this.replaceState(JSON.parse(localStorage.getItem('store') || '{}'));
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
