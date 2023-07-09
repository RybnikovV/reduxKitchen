import { UserState, UserAction, UserActionTypes, User } from '../../types/users';

const initialState: UserState = {
  users: [],
  err: null,
  loading: false,
};

export const bankUsersReducer = ( state = initialState, action: UserAction ): UserState => {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return {
        users: [...state.users, action.payload],
        err: null,
        loading: false
      }
    case UserActionTypes.ADD_USERS:
      return {
        users: [...state.users, ...action.payload],
        err: null,
        loading: false
      }
    case UserActionTypes.FETCH_USERS:
      return {
        users: [],
        err: null,
        loading: true
      }
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        users: [],
        err: action.payload,
        loading: false
      }
    default: 
      return state
  }
};

export const addUserCreator = (name: string, id = new Date().getTime()): UserAction => {
  return {
    type: UserActionTypes.ADD_USER,
    payload: {id, name}
  }
};
export const addUsersCreator = (users: User[]): UserAction => {
  return { type: UserActionTypes.ADD_USERS, payload: users }
};
export const fetchUserCreator = (): UserAction => {
  return { type: UserActionTypes.FETCH_USERS }
};
export const fetchErrorCreator = (err: string): UserAction => {
  return { type: UserActionTypes.FETCH_USERS_ERROR, payload: err }
};