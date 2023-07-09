export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  ADD_USERS = "ADD_USERS",
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
}

export interface User {
  name: string;
  id: number;
}

interface AddUserAction {
  type: UserActionTypes.ADD_USER;
  payload: User;
}
interface AddUsersAction {
  type: UserActionTypes.ADD_USERS;
  payload: User[];
}
interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchErrorUserAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export interface UserState {
  users: Array<User> | [];
  err: null | string;
  loading: boolean;
}

export type UserAction = AddUserAction | 
  AddUsersAction | FetchErrorUserAction | FetchUserAction;