import { call, put } from "redux-saga/effects";
import { setClosedIssues, setIssues, setOpenIssues } from "../../actions/issueAction";

import { requestClosedIssues, requestGetIssues, requestOpenIssues } from "../requests/getIssues";

export function* getIssues(action) {
  try {
    const response = yield call(requestGetIssues);
    const { data } = response;
    console.log(data)
    yield put(setIssues(data));
  } catch (error) {
    console.log(error);
  }
}
export function* getOpenIssues(action) {
  try {
    const response = yield call(requestOpenIssues);
    const { data } = response;
    console.log(data)
    yield put(setOpenIssues(data));
  } catch (error) {
    console.log(error);
  }
}
export function* getClosedIssues(action) {
  try {
    const response = yield call(requestClosedIssues);
    const { data } = response;
    console.log(data)
    yield put(setClosedIssues(data));
  } catch (error) {
    console.log(error);
  }
}
