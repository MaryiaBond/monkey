import React from 'react';
import classes from './MessageItem.module.css';
import Message from "./Message/Message";
const MessageItem = (props) => {
        let messData = props.state.map(mess => <Message message={mess.message} />)
    return (
        <ul className={classes.messages}>
            {messData}
        </ul>
    );
}
export default MessageItem;
