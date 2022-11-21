import { LOGIN, LOGOUT, SET_USER } from "../../redux/types/auth.types.constant";

export function login() {
  return {
    type: LOGIN,
  };
}

export function setUser(userInfo) {
  return {
    type: SET_USER,
    payload: userInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
