const defaultUsers = [];

export const SAGA_ADD_USERS = "SAGA_ADD_USERS_SAGA";
export const SAGA_FETCH_USERS = "SAGA_FETCH_USERS";

export const sagaBankUsersReducer = (state = defaultUsers, action ) => {
  switch (action.type) {
    case SAGA_ADD_USERS:
      return [...state, ...action.payload]
    default: 
      return state
  }
};

export const sagaAddUsersAction = (users) => {
  return { type: SAGA_ADD_USERS, payload: users }
};

export const sagaFetchUsersAction = () => {
  return { type: SAGA_FETCH_USERS }
};