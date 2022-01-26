import {GetItemsType, instance} from "./api";

export const usersApi = {
  getUsers(page: number, size: number, term: string, friend: null | boolean) {
    return instance.get<GetItemsType>(`users?page=${page}&count=${size}&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
      .then(res => res.data)
  }
}
