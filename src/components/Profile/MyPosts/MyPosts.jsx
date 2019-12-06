import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls";
import {maxLength, required} from "../../../utility/validation/index"

const maxLengthNumber10 = maxLength(10)

const MyPostsForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className={classes.my_posts}>
            <h2>You can create your own post</h2>
            <div className={classes.post_area}>
                <Field component={Textarea} name="newPostBody" validate={[maxLengthNumber10, required]}/>
                {/*value={props.profilePage.listenPost}*/}
                <button>Great Create!</button>
            </div>

        </form>
    )
}
const MyPostsFormRedux = reduxForm({form: 'addPostBody'})(MyPostsForm)

const MyPosts = React.memo(props => {
    let dataPosts = props.profilePage.myPosts.map(post => <Post message={post.message} like={post.like}
                                                                id={post.id}/>);

    let addNewPost = (values) => {
        if (values.newPostBody !== undefined) {
            props.addPost(values.newPostBody);
            values.newPostBody = ""
        }
    }
    return (
        <div>
            <MyPostsFormRedux onSubmit={addNewPost}/>
            <div className={classes.reverse__post}>{dataPosts}</div>
        </div>

    );
}
)

export default MyPosts;
