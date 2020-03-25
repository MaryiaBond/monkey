import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const SET_INFO = 'SET_INFO';
const SET_DELETE_POST = 'SET_DELETE_POST';
let initialState = {
    myPosts: [
        { message: 'My post number 1', id: 1, like: 15, dislike: 12 },
        { message: 'My post number 2', id: 2, like: 21, dislike: 12 },
        { message: 'My post number 3', id: 3, like: 21, dislike: 12 },
        { message: 'My post number 4', id: 4, like: 21, dislike: 12 },
        { message: 'My post number 5', id: 5, like: 21, dislike: 12 }
    ],
    likeCount: {
        count: 0
    },
    profile: {
        "aboutMe": null,
        "contacts": {
            "facebook": null,
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": null,
        "fullName": "Maryia",
        "photos": {}
    },
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
        case SET_INFO:
            {
                return {
                    ...state,
                    profile: action.profile
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
export const setInfo = (profile) => ({ type: SET_INFO, profile });
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
export const getInfo = (profile) => async (dispatch) => {
      let response = await profileAPI.uploadInfo(profile);
    if (response.resultCode == 0) {
        await dispatch(setInfo(profile))
    }

}
export default profileReducer;