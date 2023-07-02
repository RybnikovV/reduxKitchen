const defaultUsers = [];

const ADD_USER = "ADD_USER";
const ADD_USERS = "ADD_USERS";

export const bankUsersReducer = (state = defaultUsers, action ) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    case ADD_USERS:
      return [...state, ...action.payload]
    default: 
      return state
  }
};

export const addUserCreator = (name, id = new Date().getTime()) => {
  return {
    type: ADD_USER,
    payload: {id, name}
  }
};
export const addUsersCreator = (users) => {
  return { type: ADD_USERS, payload: users }
};