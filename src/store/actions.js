import api from '../api'
import mockEntities from '../config/entities'

/**
 * Load menus, entities
 * @param {store} store 
 */
const loadAll = (store) => {
  // console.log('loadAll');
  setTimeout(() => {
    store.commit('LOADED_ENTITIES', mockEntities);
  }, 200);
}

/**
 * Loaded Entity from backend
 * @param {Object} store 
 * @param {Object} payload
 */
const loadEntity = (store, payload) => {
  // console.log('loadEntity', route);
  // api.getData('get', route.meta.path, {}, 'LOADED_ENTITY')
  let entity = payload.entity;
  api.getData('get', payload.apiPath, {}, 'LOADED_ENTITY')
    .then(data => {
      console.log('resolve', data);
      store.commit('LOADED_ENTITY', {data, entity})
    })
}

export default {
  loadAll,
  loadEntity,
}