export default [
  {
    name: 'user',
    menuItem: {
      title: 'Users',
      description: null,
      icon: 'people',
      link: 'users',
    },
    routeName: 'Users',
    apiPath: 'jira/users/',
    fields: [
      {name: 'id', title: 'ID'},
      {name: 'username', title: 'Login'},
      {name: 'fullname', title: 'Fullname'},
    ],
    editable: false
  }, {
    name: 'project',
    menuItem: {
      title: 'Projects',
      description: null,
      icon: 'apps',
      link: 'projects',
    },
    routeName: 'Projects',
    apiPath: 'jira/projects/',
    fields: [
      {name: 'id', title: 'ID'},
      {name: 'lead', title: 'Lead'},
      {name: 'pkey', title: 'Code'},
      {name: 'pname', title: 'Name'},
      {name: 'url', title: 'URL'},
    ]
  }
];