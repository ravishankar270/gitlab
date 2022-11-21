import { call, put } from "redux-saga/effects";
import {
  setClosedIssues,
  setIssues,
  setIssuesInfo,
  setOpenIssues,
} from "../../actions/issueAction";

import {
  requestClosedIssues,
  requestCountOfIssues,
  requestGetIssues,
  requestOpenIssues,
} from "../requests/getIssues";

//handler for accessing the all issues
export function* getIssues(action) {
  try {
    const response = yield call(requestGetIssues);
    const { data } = response;
    yield put(setIssues(data));
  } catch (error) {
    console.log(error);
  }
}
export function* getCountOfIssues(action) {
  try {
    const response = yield call(()=>requestCountOfIssues());
    const { data } = response;
    console.log(data)
    yield put(setIssuesInfo(data));
  } catch (error) {
    console.log(error);
  }
}
//handler for accessing the open issues
export function* getOpenIssues(action) {
  try {
    const response = yield call(()=>requestOpenIssues());
    const { data } = response;
    
    yield put(setOpenIssues(data));
  } catch (error) {
    console.log(error);
  }
}
//handler for accessing the closed issues
export function* getClosedIssues(action) {
  try {
    const response = yield call(requestClosedIssues);
    const { data } = response;
    yield put(setClosedIssues(data));
  } catch (error) {
    console.log(error);
  }
}
