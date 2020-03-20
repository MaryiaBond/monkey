import { freindsAPI } from '../api/api'
const SET_FREINDS_DATA = 'SET_FREINDS_DATA';

type initialStateType = typeof initialState
type userDataType = {
    id: number
    name: string
    status: string
    photos: {
        small: string,
        large: string
    }
    followed: boolean
}
let initialState = {
    /* userOnline: [
         { id: 1, name: 'Alex Ololokin', rating: '15', dateBRTH: '10/02/1984' },
         { id: 2, name: 'Gena Shishkin', rating: '15', dateBRTH: '10/02/1984' },
         { id: 3, name: 'Vanya Gock', rating: '15', dateBRTH: '10/02/1984' },
         { id: 4, name: 'Olesha Gick', rating: '15', dateBRTH: '10/02/1984' }
     ] */
    userData: [] as Array<userDataType>,
    totalUserCount: 50 as number,
    isFollowed: null as boolean | null,
    userId: 1 as number
}


const navBarReducer = (state = initialState, action: any) : initialStateType => {
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
type getFreindsNavbarType = {
    type: typeof SET_FREINDS_DATA
    userData: Array<userDataType>
}
export const getFreindsNavbar = (userData: Array<userDataType>) : getFreindsNavbarType => ({ type: SET_FREINDS_DATA, userData });

export const getUsersOnline = (pageNumber: number, totalUserCount: number) => {
    return (dispatch: any) => {
        freindsAPI.getData(pageNumber, totalUserCount).then((response: { items: userDataType[]; }) => {
            dispatch(getFreindsNavbar(response.items));
        })
    }
}

export default navBarReducer;
