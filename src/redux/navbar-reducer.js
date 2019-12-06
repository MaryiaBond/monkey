import { freindsAPI } from '../api/api'
const SET_FREINDS_DATA = 'SET_FREINDS_DATA';
let initialState = {
    /* userOnline: [
         { id: 1, name: 'Alex Ololokin', rating: '15', dateBRTH: '10/02/1984' },
         { id: 2, name: 'Gena Shishkin', rating: '15', dateBRTH: '10/02/1984' },
         { id: 3, name: 'Vanya Gock', rating: '15', dateBRTH: '10/02/1984' },
         { id: 4, name: 'Olesha Gick', rating: '15', dateBRTH: '10/02/1984' }
     ] */
    userData: [],
    totalUserCount: 50,
    isFollowed: null,
    userId: 1
        // pageNumber: 1
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