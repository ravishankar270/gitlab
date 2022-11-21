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
    const response = yield call(()=>requestGetIssues(action.payload));
    const { data } = response;
    yield put(setIssues(data));
  } catch (error) {
    console.log(error);
  }
}

//handler for accessing closed issues
export function* getCountOfIssues(action) {
  try {
    const response = yield call(()=>requestCountOfIssues());
    const { data } = response;
    yield put(setIssuesInfo(data));//setting the state value of issues count by dispatching an action
  } catch (error) {
    console.log(error);
  }
}
//handler for accessing the open issues
export function* getOpenIssues(action) {
  try {
    const response = yield call(()=>requestOpenIssues(action.payload));
    const { data } = response;
    yield put(setOpenIssues(data));//setting the state value to open issues by dispatching an action
  } catch (error) {
    console.log(error);
  }
}
//handler for accessing the closed issues
export function* getClosedIssues(action) {
  try {
    const response = yield call(()=>requestClosedIssues(action.payload));
    const { data } = response;
    yield put(setClosedIssues(data));//setting the state value to closed issues by dispatching an action 
  } catch (error) {
    console.log(error);
  }
}
