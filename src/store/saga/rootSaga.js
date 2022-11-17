import { takeLatest,all,fork } from "redux-saga/effects";
import { authenticate } from "./handlers/auth";
import { LOGIN } from "../../redux/types/auth.types.constant";
import { getClosedIssues, getIssues, getOpenIssues } from "./handlers/getIssues";
import { GET_CLOSED_ISSUES, GET_ISSUES, GET_OPEN_ISSUES} from "../../redux/types/issue.types.constant";
export function* loginSaga() {
 
  yield takeLatest(LOGIN, authenticate)
  
  
}
export function* getIssuesSaga() {
 
  yield takeLatest(GET_ISSUES, getIssues)
  
  
}
export function* getOpenIssuesSaga() {
 
  yield takeLatest(GET_OPEN_ISSUES, getOpenIssues)
  
  
}
export function* getClosedIssuesSaga() {
 
  yield takeLatest(GET_CLOSED_ISSUES, getClosedIssues)
  
  
}

export function* watcherSaga(){
  yield all([fork(loginSaga),fork(getIssuesSaga),fork(getOpenIssuesSaga),fork(getClosedIssuesSaga)])
}
