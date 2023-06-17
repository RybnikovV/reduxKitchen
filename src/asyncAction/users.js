import { addUsersAction } from '../store/users';

export const fetchUsers = () => {
  return dispath => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispath(addUsersAction(json)))
  }
};