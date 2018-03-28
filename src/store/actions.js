import api from '../api'
import entity from './entity'

import mockEntities from '../config/entities'
import mockExtraMenuItem from '../config/extraMenuItem'
import mockLeftMenu from '../config/leftMenu'
import mockTopMenu from '../config/topMenu'


/**
 * Load menus, entities
 * @param {store} store 
 */
const loadAll = (store) => {
  console.log('loadAll', store, store.state.loadFromBackend);
  if (!store.state.loadFromBackend) {
    loadEntitiesFromMock(store);
  } else {
    loadEntitiesFromBackend(store);
  }
}

const loadEntitiesFromMock = (store) => {
  setTimeout(() => {
    // store.commit('LOADED_ENTITIES', mockEntities);
    store.commit('LOADED_ALL', {
      entities: mockEntities,
      extraMenuItem: mockExtraMenuItem,
      leftMenu: mockLeftMenu,
      topMenu: mockTopMenu,
    });
  }, 200);
}

const loadEntitiesFromBackend = (store) => {
  api.getData('get', 'admin/all/')
    .then(data => {
      store.commit('LOADED_ALL', data);
    })
}

/**
 * Load Entity from backend
 * @param {Object} store 
 * @param {Object} payload
 */
const loadEntity = (store, payload) => {
  console.log('loadEntity', store.state, payload);
  // return;
  // api.getData('get', route.meta.path, {}, 'LOADED_ENTITY')
  let entityName = payload.entityName;
  api.getData('get', entity.getApiPathByEntityName(store.state, entityName))
    .then(data => {
      console.log('resolve', data);
      store.commit('LOADED_ENTITY', { data, entityName})
    })
}

export default {
  loadAll,
  loadEntity,
}