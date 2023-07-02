import { addUsersCreator } from '../store/users';

export const fetchUsers = () => {
  return dispath => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersData => dispath(addUsersCreator(usersData)))
  }
};

export const fetchUsersSaga = () => {
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
};