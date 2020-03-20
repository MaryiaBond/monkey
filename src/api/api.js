 import * as axios from 'axios';
 const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0',
     headers: {
         "API-KEY": "9c319c49-23f8-4c0f-a40f-dda01cc4645f"
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
