 import * as axios from 'axios';
 const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0',
     headers: {
         "API-KEY": "1fb8b8e1-c87b-40a8-ab0f-3a22f8a1772c"
     }
 })
 export const userAPI = {
     getUsers(currentPage, pageSize) {
         return instance.get('users?page=' + currentPage + '&count=' + pageSize);
     },
     unfollowUsers(userId) {
         return instance.delete('follow/' + userId).
         then(response => {
             return response.data
         })
     },
     followUsers(userId) {
         return instance.post('follow/' + userId).
         then(response => {
             return response.data
         })
     }
 }
 export const profileAPI = {
     getData(userId) {
         return instance.get('profile/' + userId);
     },
     getStatus(userId) {
         return instance.get('profile/status/' + userId);
     },
     updateStatus(status) {
         return instance.put('profile/status', { status: status });
     },
     uploadPhoto(formData) {
         return instance.post('profile/photo', formData, {
             headers: {
                 'Content-Type': 'multipart/form-data'
             }
         })
     },
     uploadInfo(profile) {
         return instance.put('profile', profile)
     }
 }
 export const freindsAPI = {
     getData(pageNumber, totalUserCount) {
         return instance.get('users?page=' + pageNumber + '&count=' + totalUserCount).
         then(response => {
             return response.data
         })
     }
 }

 export const authAPI = {
     me() {
         return instance.get('auth/me')
     },
     login(email, password, rememberMe = false) {
         return instance.post('auth/login', { email, password, rememberMe })
     },
     logout() {
         return instance.delete('auth/login')
     }
 }




 export default userAPI;