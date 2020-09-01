import users from './users.js'

const getInactiveUsers = users => users.filter(({isActive})=> isActive == false).map(({name})=> name);
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]