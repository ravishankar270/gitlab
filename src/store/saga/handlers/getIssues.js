import { call, put } from "redux-saga/effects";
import { setIssues } from "../../actions/issueAction";

import { requestGetIssues } from "../requests/getIssues";

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
