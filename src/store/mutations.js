export default {
  TOGGLE_MENU_MINI (state) {
    state.miniMenu = !state.miniMenu
  },
  SHOW_PANEL_NOTIFICATIONS (state, payload) {
    state.panelNotificationsVisible = payload
    // state.panelNotificationsVisible = !state.panelNotificationsVisible
  },
  STOP_SEARCHING (state) {
    state.searching = false
    state.search = ''
  },
  START_SEARCHING (state) {
    state.searching = true
  }
}