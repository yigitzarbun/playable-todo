// imports
import {
  getUserFromLs,
  key,
  LOGIN,
  LOGOUT,
  ADD_TASK,
  GET_ALL_TASKS,
  GET_MY_TASKS,
  EDIT_TASK,
  DELETE_TASK,
} from "./actions";

//initial state
const initialState = {
  user: getUserFromLs(),
  users: [],
  allTasks: [],
  myTasks: [],
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
    case EDIT_TASK:
      const copyTasks = [...(state.allTasks || [])];
      const oldTask = copyTasks.filter(
        (task) => task.task_id == action.payload.task_id
      )[0];
      const updatedTask = action.payload;
      const index = copyTasks.indexOf(oldTask);
      copyTasks.splice(index, 1, updatedTask);
      return {
        ...state,
        allTasks: [...copyTasks],
      };
    case DELETE_TASK:
      const copyTasks2 = [...state.allTasks];
      const newTasks = copyTasks2.filter(
        (task) => action.payload !== task.task_id
      );
      return {
        ...state,
        allTasks: [...newTasks],
      };
    default:
      return state;
  }
}
