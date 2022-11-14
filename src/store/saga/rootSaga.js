import { takeLatest,all,fork } from "redux-saga/effects";
import { authenticate } from "./handlers/auth";
import { LOGIN } from "../../redux/types/auth.types.constant";
import { getIssues } from "./handlers/getIssues";
import { GET_ISSUES } from "../../redux/types/issue.types.constant";
export function* loginSaga() {
 
  yield takeLatest(LOGIN, authenticate)
  
  
}
export function* getIssuesSaga() {
 
  yield takeLatest(GET_ISSUES, getIssues)
  
  
}

export function* watcherSaga(){
  yield all([fork(loginSaga),fork(getIssuesSaga)])
}
