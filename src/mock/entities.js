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