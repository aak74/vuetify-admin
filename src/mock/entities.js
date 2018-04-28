export default [
  {
    name: 'user',
    title: 'User',
    titlePlural: 'Users',
    apiPath: 'jira/users/',
    fields: [
      {name: 'id', title: 'ID'},
      {name: 'username', title: 'Login'},
      {name: 'fullname', title: 'Fullname'},
    ],
    editable: false
  }, {
    name: 'project',
    title: 'Project',
    titlePlural: 'Projects',
    apiPath: 'projects/',
    fields: [
      {name: '_id', title: 'ID'},
      {name: 'name', title: 'Name'},
      {name: 'path', title: 'Path'},
    ]
  }
];