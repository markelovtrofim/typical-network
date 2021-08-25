import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "40064e17-c1e2-4aa5-9ee8-3f5e2d5370da"
    }
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get('profile/' + userId)
    }
};

export const profileAPI = {
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put('profile', profile);
    }
}

export const authAPI = {
    getMe() {
        return instance.get('auth/me')
    },
    signInAPI(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe, captcha: true})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
    }
}
