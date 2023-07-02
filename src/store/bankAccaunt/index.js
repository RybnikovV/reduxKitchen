const defaultState = {
  cash: 0
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";
export const ADD_CASH_ASYNC = "ADD_CASH_ASYNC";
export const GET_CASH_ASYNC = "GET_CASH_ASYNC";

export const bankAccauntReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload }
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
};

export const addCashCreator = (cash) => ({type: ADD_CASH, payload: cash});
export const getCashCreator = (cash) => ({type: GET_CASH, payload: cash});
export const getCashAsyncCreator = (cash) => ({type: GET_CASH_ASYNC, payload: cash});
export const addCashAsyncCreator = (cash) => ({type: ADD_CASH_ASYNC, payload: cash}); 