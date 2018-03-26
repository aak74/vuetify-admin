import entities from './entities'

export default [
  {    
    title: 'Analytics',
    items: [
      {
        icon: 'dashboard',
        title: 'Dashboard',
        link: '/dashboard',
        description: 'Some useful description about Dashboard'
      },
      {
        icon: 'event',
        title: 'Events',
        link: '',
        description: null
      },
      {
        icon: 'comment',
        title: 'Notifications',
        link: '',
        description: null
      } 
    ]
  },
  {
    title: 'Entities',
    items: entities,
  }
]