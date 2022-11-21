import axioInstance from "./AxioInstance";

export function requestGetUser() {
  return axioInstance.get("user_info")
}
