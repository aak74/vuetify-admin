import api from '../api'

const loadUsers = (store, cb) => {
  // if (!store.state.autoLoad) {
  //   return;
  // }
  store.commit('LOADING');
  
  api.request('get', 'jira/users/')
    .then((response) => {
      console.log('loadAll', response);
      if (response.data.status !== 'ok') {
        store.commit('LOADING_ERROR', { message: 'Response status is not ok', code: 406 })
        return
      }

      store.commit('LOADED')
      store.commit('LOADED_USERS', response.data.data)
      if (!!cb) {
        cb()
      }
    })
    .catch((error) => {
      store.commit('LOADING_ERROR', error)
    })
}

export default {
  // loadAll,
  loadUsers
}