import { call, put } from "redux-saga/effects";
import {  setUser } from "../../actions/authAction";

import { requestGetUser } from "../requests/auth";

export function* authenticate(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    console.log(data.avatarUrl)
    localStorage.setItem('token',data.access_token)
    // var inFifteenMinutes = new Date(new Date().getTime() +  60 * 1000);
    // Cookies.set('token',data.access_token,{expires:inFifteenMinutes})
    localStorage.setItem('img',data.avatarUrl)
    yield put(setUser({username:data.username,email:data.email,avatarUrl:data.avatarUrl}));
  } catch (error) {
    console.log(error);
  }
}
