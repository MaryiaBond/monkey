import { freindsAPI } from '../api/api'
const SET_FREINDS_DATA = 'SET_FREINDS_DATA';
let initialState = {
    userData: [],
    totalUserCount: 100,
    isFollowed: null,
    userId: 1
}


const navBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FREINDS_DATA:
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state
    }
}

export const getFreindsNavbar = (userData) => ({ type: SET_FREINDS_DATA, userData });

export const getUsersOnline = (pageNumber, totalUserCount) => {
    return (dispatch) => {
        freindsAPI.getData(pageNumber, totalUserCount).then(response => {
            dispatch(getFreindsNavbar(response.items));
        })
    }
}

export default navBarReducer;