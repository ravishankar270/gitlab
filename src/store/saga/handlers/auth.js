import { call, put } from "redux-saga/effects";
import {  setUser } from "../../actions/authAction";

import { requestGetUser } from "../requests/auth";

export function* authenticate(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    console.log(data)
    localStorage.setItem('token',data.access_token)
    yield put(setUser({username:data.username,email:data.email}));
  } catch (error) {
    console.log(error);
  }
}
