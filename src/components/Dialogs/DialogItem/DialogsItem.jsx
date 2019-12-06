import React from 'react';
import Item from "./Item/Item";
import classes from './DialogsItem.module.css'

const DialogsItem = (props) => {
    let dataArr = props.state
        .map(dialog =>  <Item username={dialog.name} id={dialog.id} />
        );
    return (
        <div className={classes.dialog}>
            {dataArr}
        </div>
    );
}
export default DialogsItem;
