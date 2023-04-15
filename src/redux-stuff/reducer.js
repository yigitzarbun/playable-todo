// imports
import { getUserFromLs, token, LOGIN } from "./actions";

//initial state
const initialState = {
  user: getUserFromLs(),
  users: null,
  allTasks: null,
  myTasks: null,
};

export function myReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(token, JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
