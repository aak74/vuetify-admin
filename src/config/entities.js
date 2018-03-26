export default [
  {
    name: 'user',
    display: 'User',
    title: 'Users',
    routename: 'Users',
    link: 'users',
    apiPath: 'jira/users/',
    icon: 'people',
    description: null,
    fields: [
      {name: 'id', title: 'ID'},
      {name: 'username', title: 'Login'},
      {name: 'fullname', title: 'Fullname'},
    ],
    editable: false
  }, {
    name: 'project',
    display: 'Project',
    title: 'Projects',
    routename: 'Projects',
    link: 'projects',
    apiPath: 'jira/projects/',
    icon: 'apps',
    description: null,
    fields: [
      {name: 'id', title: 'ID'},
      {name: 'lead', title: 'Lead'},
      {name: 'pkey', title: 'Code'},
      {name: 'pname', title: 'Name'},
      {name: 'url', title: 'URL'},
    ]
  }
];