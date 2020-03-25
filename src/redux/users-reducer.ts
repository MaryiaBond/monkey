import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utility/object-helpers";


const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'monkey-space/toggle-is-follow/TOGGLE_IS_FOLLOWING_PROGRESS';

type initialStateType = {
    users: Object
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
}

let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 40,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
const usersReducer = (state = initialState, action: any) : initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
                    // users: state.users.map(u => {
                    //     if (u.id === action.userId) {
                    //         return {...u, followed: true }
                    //     }
                    //     return u;
                    // }),

            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
                    // users: state.users.map(u => {
                    //     if (u.id === action.userId) {
                    //         return {...u, followed: false }
                    //     }
                    //     return u;
                    // }),

            }
        case SET_USERS:
            return {...state, users: action.users }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }

}

type followSuccessType = {
    type : typeof FOLLOW
    userId : number
}

type unfollowSuccessType = {
    type : typeof UNFOLLOW
    userId : number
}

type setUserType = {
    type : typeof SET_USERS
    users : Object
}

type setCurrentPageType = {
    type : typeof SET_CURRENT_PAGE
    currentPage : number
}

type setTotalCountType = {
    type : typeof SET_TOTAL_USER_COUNT
    count : number
}

type toggleIsFetchingType = {
    type : typeof TOOGLE_IS_FETCHING
    isFetching : boolean
}

type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const followSuccess = (userId: number) : followSuccessType => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId : number) : unfollowSuccessType => ({ type: UNFOLLOW, userId });
export const setUser = (users: Object) : setUserType => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage : number) : setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalUserCount : number) : setTotalCountType => ({ type: SET_TOTAL_USER_COUNT, count: totalUserCount });
export const toggleIsFetching = (isFetching : boolean) : toggleIsFetchingType => ({ type: TOOGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching : boolean, userId : number) : toggleFollowingProgressType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsersAction = (currentPage : number, pageSize : number) => {
    return async(dispatch : any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let response = await userAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUser(response.data.items));
        dispatch(setTotalCount(response.data.totalCount));
    }
}


const followUnfollowFlow = async(dispatch : any, userId : number, apiMethod : any, actionCreator : any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}



export const follow = (userId : number) => {
    return async(dispatch : any) => {
        followUnfollowFlow(dispatch, userId, userAPI.followUsers.bind(userId), followSuccess)
    }
}

export const unfollow = (userId : number) => {
    return async(dispatch : any) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollowUsers.bind(userId), unfollowSuccess)
    }
}

export default usersReducer;
