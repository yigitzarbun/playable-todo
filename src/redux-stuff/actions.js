import axios from "axios";
import { response } from "express";

// auth
export const key = "playable2do";
export function getUserFromLs() {
  let user = null;
  const userString = JSON.parse(localStorage.getItem(key));
  if (userString) {
    user = userString.user;
  }
  return user;
}

// api url
let developmentUrl = "http://localhost:9000/";
let productionUrl = "";
let url = developmentUrl;

// exports
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ADD_TASK = "ADD_TASK";
export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const GET_MY_TASKS = "GET_MY_TASKS";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";

// axios (auth) set header
const axiosWithAuth = () => {
  const tokenObj = JSON.parse(localStorage.getItem(key));
  const token = tokenObj.token;
  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

// actions
export const registerUser = (formData, navigate) => (dispatch) => {
  axios.post(url + "api/auth/register", formData).then((response) => {
    if (response.status == 201) {
      navigate("/login");
    }
  });
};

export const loginWith = (formData, navigate) => (dispatch) => {
  axios
    .post(url + "api/auth/login", formData)
    .then((response) => {
      if (response.status == 200) {
        dispatch({ type: LOGIN, payload: response.data });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    })
    .catch((error) => {
      console.log("login error: ", error);
    });
};

export const addTask = (data, navigate) => (dispatch) => {
  axiosWithAuth()
    .post(url + "api/tasks", data)
    .then((response) => {
      if (response.status == 201) {
        dispatch({ type: ADD_TASK, payload: response.data });
        navigate("/");
      }
    })
    .catch((error) => console.log(error));
};

export const getAllTasks = () => (dispatch) => {
  axiosWithAuth()
    .get(url + "api/tasks")
    .then((response) => {
      dispatch({ type: GET_ALL_TASKS, payload: response.data });
    })
    .catch((error) => console.log(error));
};

export const getMyTasks = (user) => (dispatch) => {
  axiosWithAuth()
    .get(url + "api/tasks")
    .then((response) => {
      const myTasks = response.data.filter(
        (task) => task.user_id == user.user_id
      );
      dispatch({ type: GET_MY_TASKS, payload: myTasks });
    })
    .catch((error) => console.log(error));
};

export const editTask = (data) => (dispatch) => {
  axiosWithAuth()
    .put(url + `api/tasks/${data.task_id}`, data)
    .then((response) => {
      if (response.status === 201) {
        dispatch({ type: EDIT_TASK, payload: response.data });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteTask = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(url + `api/tasks/${id}`)
    .then((response) => {
      if (response.status == 201) {
        dispatch({ type: DELETE_TASK, payload: response.data });
      }
    });
};
