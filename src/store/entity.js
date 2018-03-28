const getApiPathByEntityName = (state, entityName) => {
  return getEntityByName(state, entityName).apiPath;
}

const getEntityByName = (state, entityName) => {
  if (!state.data.entities[entityName]) {
    throw new Error(`Entity ${entityName} not found!`);
  }
  return state.data.entities[entityName];
}

export default {
  getApiPathByEntityName,
  getEntityByName,
}