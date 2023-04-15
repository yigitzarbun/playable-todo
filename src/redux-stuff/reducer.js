// imports
import {
  getUserFromLs,
  key,
  LOGIN,
  LOGOUT,
  ADD_TASK,
  GET_ALL_TASKS,
  GET_MY_TASKS,
} from "./actions";

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
    case ADD_TASK:
      return {
        ...state,
        allTasks: [action.payload, ...(state.allTasks || [])],
        myTasks: [action.payload, ...(state.myTasks || [])],
      };
    case GET_ALL_TASKS:
      return {
        ...state,
        allTasks: action.payload,
      };
    case GET_MY_TASKS:
      return {
        ...state,
        myTasks: action.payload,
      };
    default:
      return state;
  }
}
