import { addUsersCreator, fetchUserCreator, fetchErrorCreator } from '../store/users';
import { Dispatch } from 'redux';
import { UserAction } from '../types/users'; 

export const fetchUsers = () => {
  return (dispath: Dispatch<UserAction>) => {
    dispath(fetchUserCreator());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersData => dispath(addUsersCreator(usersData)))
      .catch(err => dispath(fetchErrorCreator(err.message)))
  }
};

export const fetchUsersSaga = () => {
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
};