// imports
import { getUserFromLs, key, LOGIN, LOGOUT } from "./actions";

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
      localStorage.setItem(key, JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem(key);
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
