import React from 'react';
import classes from './TextArea.module.css';
import {addMessActionCreator} from "../../../redux/dialogs-reducer";
import TextArea from "./TextArea";
import connect from "react-redux/es/connect/connect";
import {getDialogPage} from "../../../redux/users-selectors";

// const TextAreaContainer = (props) => {
//     let valueMess = props.state.dialogPage.listenMessage.text;
//     let addMessage = () => {
//         // let text = newMessage.current.value;
//
//         let add = addMessActionCreator();
//         props.dispatch(add);
//         // newMessage.current.value = '';
//
//     }
//     let listenMessage = (text) => {
//         props.dispatch(listenMessActionCreator(text));
//     }
//       return (
//         <TextArea listenMessage={listenMessage} addMessage={addMessage} state = {props.state}/>
//       )
// }
let mapStateToProps = (state) => {
    return {
        state: getDialogPage(state)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMess) => {
            dispatch(addMessActionCreator(newMess));
    }
    }
}
const TextAreaContainer = connect(mapStateToProps,mapDispatchToProps)(TextArea);
export default TextAreaContainer;
