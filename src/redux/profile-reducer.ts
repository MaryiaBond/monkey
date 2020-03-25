import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const SET_INFO = 'SET_INFO';
const SET_DELETE_POST = 'SET_DELETE_POST';

type PostType = {
    id: number
    message: string
    like: number
    dislike: number
}
type contactsType ={
    github: string
    vk:string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type photosType = {
    small: string | null
    large: string | null
}
type ProfileType ={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}
type InitialStateType = typeof initialState
let initialState = {
    myPosts: [
        { message: 'My post number 1', id: 1, like: 15, dislike: 12 },
        { message: 'My post number 2', id: 2, like: 21, dislike: 12 },
        { message: 'My post number 3', id: 3, like: 21, dislike: 12 },
        { message: 'My post number 4', id: 4, like: 21, dislike: 12 },
        { message: 'My post number 5', id: 5, like: 21, dislike: 12 }
    ] as Array<PostType>,
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
    } ,
    // profile: null as ProfileType | null,
    status: "" as string,
    photo: {}
}
export const profileReducer = (state = initialState, action: any): InitialStateType => {
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
type addPostActionype = {
    type: typeof ADD_POST
    newPost: string
}
type setUserProfileType ={
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type setStatusType ={
    type: typeof SET_STATUS
    status: string
}
type setPhotoType ={
    type: typeof SET_PHOTO
    photo: string
}
type deletePostType = {
    type: typeof SET_DELETE_POST
    id: number
}
type setInfoType = {
    type: typeof SET_INFO
    profile: any
}
export const addPostActionCreator = (newPost: string) : addPostActionype => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile: ProfileType) : setUserProfileType => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });
export const setPhoto = (photo: FormData) : { photo: FormData; type: string } => ({ type: SET_PHOTO, photo });
export const deletePost = (id: number) : deletePostType => ({ type: SET_DELETE_POST, id });


export const setInfo = (profile : any) : setInfoType => ({ type: SET_INFO, profile });

export const getUserProfile = (userId:number) =>  async (dispatch:any) => {
    let response = await profileAPI.getData(userId)
        dispatch(setUserProfile(response.data));
};
export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
};
export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await  profileAPI.updateStatus(status);
        if (response.resultCode == 0) {
            dispatch(setStatus(response.data));
        }

}
type getPhotoType = {
    dispatch: any
    response: any
    formData: any
}
export const getPhoto = (photoFile:string): (dispatch: any) => any => (dispatch) => {
    let formData = new FormData();
    formData.append("image", photoFile);
    return profileAPI.uploadPhoto(formData).then((response: { resultCode: number; }) => {
        if (response.resultCode == 0) {
            dispatch(setPhoto(formData))
        }
    })
}
export const getInfo = (profile : any) => async (dispatch : any) => {
      let response = await profileAPI.uploadInfo(profile);
    if (response.resultCode == 0) {
        await dispatch(setInfo(profile))
    }

}
export default profileReducer;
