import axios from "./http"

//登录
export const loginApi = (data) => {
  return axios.post("/sys/login", data)
}
