import axiosInstance from "./AxioInstance";

export function requestCountOfIssues() {
  return axiosInstance.get("issue_page_info")
}
export function requestGetIssues() {
  return axiosInstance.get("issues")
}
export function requestOpenIssues() {
  return axiosInstance.get("open_issues?_page=1&_limit=5")
}
export function requestClosedIssues() {
  return axiosInstance.get("closed_issues")
}
