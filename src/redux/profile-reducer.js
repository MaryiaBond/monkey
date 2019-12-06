import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const LISTEN_POST = 'LISTEN-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const SET_DELETE_POST = 'SET_DELETE_POST';
let initialState = {
    myPosts: [
        { message: 'Hi, were are you from?', id: 1, like: 15, dislike: 12 },
        { message: 'Did you hear about 1-ARspacePlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about teenHool?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about 134-space-dimantion?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about AlphaPlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about BetaPlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about 09867-spacePlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about gog?', id: 2, like: 21, dislike: 12 },
    ],
    likeCount: {
        count: 0
    },
    profile: null,
    status: "Space and Race",
    photo: {}
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                return {
                    ...state,
                    myPosts: [...state.myPosts, {  message: action.newPost, id: 5, like: 0, dislike: 0 }]
                }
            }
        case SET_USER_PROFILE:
            {
                return {
                    ...state,
                    profile: action.profile
                }
            }
        case SET_STATUS:
            {
                return {
                    ...state,
                    status: action.status
                }
            }
        case SET_PHOTO:
            {
                return {
                    ...state,
                    photo: action.photo
                }
            }
        case SET_DELETE_POST:
            {
                return {
                    ...state, myPosts: state.myPosts.filter(p => p.id != action.id)
                }
            }
        default:
            return state;

    }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });
export const setPhoto = (photo) => ({ type: SET_PHOTO, photo });
export const deletePost = (id) => ({ type: SET_DELETE_POST, id });

export const getUserProfile = (userId) =>  async (dispatch) => {
    let response = await profileAPI.getData(userId)
        dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await  profileAPI.updateStatus(status);
        if (response.resultCode == 0) {
            dispatch(setStatus(response.data));
        }

}
export const getPhoto = (photoFile) => (dispatch) => {
    let formData = new FormData();
    formData.append("image", photoFile);
    return profileAPI.uploadPhoto(formData).then(response => {
        if (response.resultCode == 0) {
            dispatch(setPhoto(formData))
        }
    })
}
export default profileReducer;