import users from './users.js'

const getUsersWithGender = (users, option) => users.filter(({gender}) => gender == option).map(({name})=> name);
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]