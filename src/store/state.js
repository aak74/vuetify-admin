import topMenu from '../mock/topMenu'

export default {
  extraMenuItem: null,
  leftMenu: [],
  topMenu,
  data: {
    items: [],
    headers: [],
    currentHeaders: []
  },
  currentEntity: null,
  entities: null,
  status: {
    panelNotificationsVisible: false,
    miniMenu: false,
    searching: false,
    search: '',
    loading: false
  },
  ui: {
    defaultPagination: [10, 25, { 'text': 'All', 'value': -1 }],
    defaultControls: [
      { name: 'Edit', icon: 'edit', color: 'teal', emit: 'editItem' },
      { name: 'Delete', icon: 'delete', color: 'pink', emit: 'deleteItem' },
    ]
  },
  notifications: {
    title: '2 unread notifications',
    items: [
      {
        title: '12 new users registered',
        icon: 'person_add',
      },
      {
        title: 'DB overloaded 80%',
        icon: 'data_usage',
      }
    ]
  },
  user: {
    fullname: 'John Doe',
    role: 'Administrator'
  },
  loadFromBackend: false
}