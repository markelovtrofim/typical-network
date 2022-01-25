import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

export const musicAPI = {
  getTracks() {
    return instance.get('tracks')
      .then(response => response.data);
  }
}
