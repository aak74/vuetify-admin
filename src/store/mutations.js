export default {
  TOGGLE_MENU_MINI (state) {
    state.status.miniMenu = !state.status.miniMenu
  },
  SHOW_PANEL_NOTIFICATIONS (state, payload) {
    state.status.panelNotificationsVisible = payload
  },
  STOP_SEARCHING (state) {
    state.status.searching = false
    state.status.search = ''
  },
  START_SEARCHING (state) {
    state.status.searching = true
  },

  TOP_MENU_CHANGED (state, id) {
    console.log('TOP_MENU_CHANGED', id);
    state.topMenu.forEach((item) => {
      item.active = (parseInt(item.id) === parseInt(id))
    })
  },

  SHOW_PROFILE(state) {
    console.log('SHOW_PROFILE');
  },

  LOGOUT(state) {
    console.log('LOGOUT');
  },

}