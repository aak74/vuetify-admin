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
}