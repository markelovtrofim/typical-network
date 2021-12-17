import {GetItemsType, instance} from "./api";

export const usersAPI = {
  getUsers(page: number, size: number, term: string = '', friend: null | boolean = null) {
    return instance.get<GetItemsType>(`users?page=${page}&count=${size}&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
      .then(res => res.data)
  }
}
