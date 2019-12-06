import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import TextAreaContainer from "./TextArea/TextAreaContainer";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <MessageItem
                state = {props.state.dataMess}
            />
            <DialogsItem
                state = {props.state.dataUser}
            />
            <TextAreaContainer
               dispatch={props.dispatch}
            />
        </div>
    );
}
export default Dialogs;
