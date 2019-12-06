import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/es/connect/connect";
import {getProfilePage} from "../../../redux/users-selectors";

// const MyPostsContainer = (props) => {
//     let addPost = () => {
//         props.dispatch(addPostActionCreator());
//     }
//
//     let listenPost = (text) => {
//         props.dispatch(listenPostActionCreator(text));
//     }
//     return (
//         <MyPosts listenPost={listenPost} addPost={addPost} state={props.state}/>
//     );
// }

let mapStateToProps = (state) => {
    return {
        profilePage: getProfilePage(state)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
