export default {
  leftMenu (state) {
    return state.leftMenu.map(group => {
      group.items.map(item => {
        if (!item.description) {
          item.description = item.title
        }
        return item
      })
      return group
    })
  },

  users (state) {
    if (!state.data.users) {
      return []
    }
    return state.data.users
  },

  items (state) {
    if (!state.data.items) {
      return []
    }
    return state.data.items
  },

  headers (state) {
    if (!state.data.headers) {
      return []
    }
    return state.data.headers
  },

  currentEntityList (state) {
    console.log('currentEntityList', state.currentEntity, state.data[state.currentEntity]);
    if (!state.currentEntity) {
      return [];
    }
    
    return state.data[state.currentEntity];
  }
}