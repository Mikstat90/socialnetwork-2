import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/State";

type DialogsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <DialogItem dialogsData={props.dialogsData}/>
            <Message messagesData={props.messagesData}/>
        </div>
    );
};
