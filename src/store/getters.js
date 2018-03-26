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
    if (!state.data.headers[state.currentEntity]) {
      return []
    }

    let headers = state.data.headers[state.currentEntity].slice();
    if (state.ui.defaultControls && state.ui.defaultControls.length) {
      headers.push({ text: 'Actions', value: 'actions', sortable: false, invisible: true });
    }
    return headers;
  },

  currentEntityList (state) {
    console.log('currentEntityList', state.currentEntity, state.data[state.currentEntity]);
    if (!state.currentEntity) {
      return [];
    }
    
    return state.data[state.currentEntity];
  }
}