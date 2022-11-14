import axios from "axios";

export function requestGetUser() {
  return axios.get("http://localhost:3001/user_info")
}
