import axios from "axios";

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
