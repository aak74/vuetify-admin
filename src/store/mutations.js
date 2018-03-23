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

  SHOW_PROFILE (state) {
    console.log('SHOW_PROFILE');
  },

  LOGOUT (state) {
    console.log('LOGOUT');
  },

  LOADING_ERROR (state, error) {
    console.log('LOADING_ERROR', error);
    state.status.loading = false;
  },

  LOADING (state, data) {
    state.status.loading = true;
  },

  LOADED (state) {
    console.log('LOADED');
    state.status.loading = false;
  },

  LOADED_USERS (state, data) {
    console.log('LOADED_USERS', data, window);
    
    // state
  },

}