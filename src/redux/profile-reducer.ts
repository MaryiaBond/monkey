import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const LISTEN_POST = 'LISTEN-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';
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
        { message: 'Hi, were are you from?', id: 1, like: 15, dislike: 12 },
        { message: 'Did you hear about 1-ARspacePlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about teenHool?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about 134-space-dimantion?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about AlphaPlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about BetaPlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about 09867-spacePlanet?', id: 2, like: 21, dislike: 12 },
        { message: 'Did you hear about gog?', id: 2, like: 21, dislike: 12 },
    ] as Array<PostType>,
    likeCount: {
        count: 0
    },
    profile: null as ProfileType | null,
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
export const addPostActionCreator = (newPost: string) : addPostActionype => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile: ProfileType) : setUserProfileType => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });
export const setPhoto = (photo: FormData) => ({ type: SET_PHOTO, photo });
export const deletePost = (id: number) : deletePostType => ({ type: SET_DELETE_POST, id });

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
export default profileReducer;
