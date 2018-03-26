import api from '../api'
import entities from '../config/entities'

/**
 * Load menus, entities
 * @param {store} store 
 */
const loadAll = (store) => {
  // console.log('loadAll');
  setTimeout(() => {
    store.state.data.headers = {};
    console.log('loadAll 2', entities);
    entities.forEach(entity => {
      store.state.data.headers[entity.name] = [];
      entity.fields.forEach(field => {
        store.state.data.headers[entity.name].push({
          text: field.title,
          value: field.name
        });
      });
    });
  }, 200);
}

/**
 * 
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