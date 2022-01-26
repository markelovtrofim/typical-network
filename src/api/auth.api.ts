import {instance} from "./api";

export const authAPI = {
  getMe() {
    return instance.get("auth/me")
  },
  signInAPI(email: string, password: string, rememberMe: boolean = true, captcha: string = '') {
    return instance.post("auth/login", {email, password, rememberMe, captcha})
      .then(response => response.data)
  },
  logout() {
    return instance.delete("auth/login")
  },
  captcha() {
    return instance.get("security/get-captcha-url")
  }
}