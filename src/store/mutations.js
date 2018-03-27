import Entity from '../pages/Entity'
import router from '../router'

const SET_CURRENT_ENTITY = (state, entity) => {
  console.log('SET_CURRENT_ENTITY', entity);
  state.currentEntity = entity;
  state.data.currentHeaders = state.data.headers[state.currentEntity];
}

const LOADING_SUCCESS = (state) => {
  state.status.loading = false;
}

const LOADED_ENTITIES = (state, entities) => {
  console.log('LOADED_ENTITIES', entities);
  state.data.headers = {};
  // console.log('loadAll 2', entities);
  entities.forEach(entity => {
    state.data.headers[entity.name] = [];
    entity.fields.forEach(field => {
      state.data.headers[entity.name].push({
        text: field.title,
        value: field.name
      });
    });
  });
}

const LOADED_LEFT_MENU = (state, menuItems) => {
  console.log('LOADED_LEFT_MENU', menuItems, router, window.Vue);
  state.leftMenu = menuItems;
  const routes = menuItems.reduce((carry, groupMenu) => {
    console.log('reduce', carry, groupMenu);
    
    if (!groupMenu.items || !groupMenu.items.reduce) {
      return carry;
    }
    return groupMenu.items.reduce((carry, menuItem) => {
      carry.push({
        path: '/' + menuItem.link,
        name: menuItem.name,
        meta: { apiPath: menuItem.apiPath, entity: menuItem.name },
        component: Entity
      });
      return carry;
    }, carry) 
    // return carry;
  }, []) 
  // debugger;
  // router.addRoutes(routes);
  console.log('LOADED_LEFT_MENU 2', routes, router.options.routes);
}

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
    LOADING_SUCCESS(state);
  },
  
  LOADED_ALL (state, data) {
    console.log('LOADED_ALL', data);
    LOADED_ENTITIES(state, data.entities)
    LOADED_LEFT_MENU(state, data.leftMenu)
    LOADING_SUCCESS(state);
  },
  
  LOADED_ENTITY (state, payload) {
    console.log('LOADED_USERS', payload);
    state.data.items = payload.data;
    SET_CURRENT_ENTITY(state, payload.entity);
    LOADING_SUCCESS(state);
  },
  
  LOADED_ENTITIES,
  LOADING_SUCCESS,
  SET_CURRENT_ENTITY
}