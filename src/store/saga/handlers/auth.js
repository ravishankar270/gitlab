import { call, put } from "redux-saga/effects";
import { setUser } from "../../actions/authAction";

import { requestGetUser } from "../requests/auth";

// authenicating and setting the user data to localstorage
export function* authenticate(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("currenttime", new Date(new Date().getTime()));
    localStorage.setItem("img", data.avatarUrl);
    yield put(
      setUser({
        username: data.username,
        email: data.email,
        avatarUrl: data.avatarUrl,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
