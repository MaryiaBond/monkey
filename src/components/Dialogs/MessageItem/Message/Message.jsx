import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <li className={classes.messages}>
            <div className={classes.message}>
                {props.message}
            </div>
        </li>
    );
}
export default Message;
