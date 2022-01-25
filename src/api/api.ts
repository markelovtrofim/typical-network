import axios from "axios"
import {UserType} from "../types"

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "40064e17-c1e2-4aa5-9ee8-3f5e2d5370da"
    }
})

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postUsers(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        return instance.get("profile/" + userId)
    }
};

export const profileAPI = {
    getStatus(userId: number) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status: string) {
        return instance.put("profile/status", {status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put("profile/photo", formData, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        });
    },
    saveProfile(profile: any) {
        return instance.put("profile", profile);
    }
}

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