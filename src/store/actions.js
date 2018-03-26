import api from '../api'
import entities from '../config/entities'

const loadAll = (store) => {
  console.log('loadAll');
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

const loadEntity = (store, route) => {
  console.log('loadEntity', route);
  // api.getData('get', route.meta.path, {}, 'LOADED_ENTITY')
  let entity = route.meta.entity;
  api.getData('get', route.meta.path, {}, 'LOADED_ENTITY')
    .then(data => {
      console.log('resolve', data);
      store.commit('LOADED_ENTITY', {data, entity})
    })
}

export default {
  loadAll,
  loadEntity,
}