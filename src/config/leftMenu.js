import entities from './entities'

let menu = [
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
]

let items = entities.reduce((carry, entity) => {
  carry.push(entity.menuItem);
  return carry;
}, [])

menu.push({ title: 'Entities', items})

export default menu;