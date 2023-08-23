import React from 'react';
import s from './Message.module.css'
import {MessagesDataType} from "../../../redux/State";

type MessageType = {
    messagesData: MessagesDataType[]
    addMessage: () => void
    updateNewMessageText: (newMessage) => void
    newMessagesText: string
}

export const Message = (props: MessageType) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.message}>
            {props.messagesData.map((el, index) => <div key={index}>{el.message}</div>)}
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessagesText}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

