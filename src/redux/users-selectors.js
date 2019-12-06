import { createSelector } from 'reselect'

export const getUsers = (state) => {
        return state.usersPage.users
    }
    // export const getUsers = createSelector(getUsersSelector, (users) => {
    //     return users
    // })

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getToggleIfFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getProfileInfo = (state) => {
    return state.profilePage.profile;
}

export const getProfileStatus = (state) => {
    return state.profilePage.status
}

export const getAuthUserId = (state) => {
    return state.auth.userId
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}

export const getDialogPage = (state) => {
    return state.dialogPage
}

export const getProfilePage = (state) => {
    return state.profilePage
}