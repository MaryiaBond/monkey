import React from 'react';
import classes from './Post.module.css';
import ava from './img/avatar1.jpg';


const Post = (props) => {
    // let addLike = () => {
    //     // likeActionCreator(count)
    // }
    return (
        <div className={classes.post}>
            <div className={classes.ava}><img src={ava}/></div>
            <div className={classes.post_text}>
                {props.message}
            </div>
            <div className={classes.like}> <span><span>{props.like}</span>like<i></i></span> </div>
        </div>
    );
}

export default Post;
