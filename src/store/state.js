import leftMenu from '../config/leftMenu'
import topMenu from '../config/topMenu'
import extraMenuItem from '../config/extraMenuItem'

export default {
  extraMenuItem,
  leftMenu,
  topMenu,
  status: {
    panelNotificationsVisible: false,
    miniMenu: false,
    searching: false,
    search: ''
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
  }
}